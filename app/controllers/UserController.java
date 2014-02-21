package controllers;

import Domain.Models.User;
import Domain.Services.IUserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.inject.Inject;
import org.bson.types.ObjectId;
import play.mvc.Result;
import play.mvc.Controller;
import Infrastructure.IJsonMapper;
import play.libs.Json;

public class UserController extends Controller {

    private IUserRepository userRepository;
    private IJsonMapper jsonMapper;

    @Inject
    public UserController(IUserRepository userRepository,IJsonMapper jsonMapper) {
        this.userRepository = userRepository;
        this.jsonMapper = jsonMapper;
    }

    public Result login(String name,String password){
        User connectedUser = userRepository.getUser(name,password);
        if(connectedUser == null){
            return badRequest("User name or password doesnt exsits");
        }
        return ok(jsonMapper.toJson(connectedUser));
    }

    public Result createUser(){
        JsonNode json = request().body().asJson();
        User user = Json.fromJson(json, User.class);
        user.setId(new ObjectId().toStringMongod());

        userRepository.save(user);

        return ok("");
    }

}
