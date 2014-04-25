package controllers;

import Domain.Models.User;
import Domain.Services.IBoardsRepository;
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
    private IBoardsRepository boardsRepository;

    @Inject
    public UserController(IUserRepository userRepository,IJsonMapper jsonMapper,IBoardsRepository boardsRepository) {
        this.userRepository = userRepository;
        this.jsonMapper = jsonMapper;
        this.boardsRepository = boardsRepository;
    }

    public Result getUsersByFilter(String name) {
        return ok(jsonMapper.toJson(userRepository.getByFilter(name)));
    }

    public Result login(String name,String password){
        User connectedUser = userRepository.getByLoginData(name, password);
        if(connectedUser == null){
            return badRequest("User name or password doesnt exsits");
        }
        return ok(jsonMapper.toJson(connectedUser));
    }

    public Result getUserBoards(String userId){
        User user = userRepository.getById(userId);
        return ok(jsonMapper.toJson(boardsRepository.getByIds(user.getBoards())));
    }

    public Result update(){
        JsonNode json = request().body().asJson();
        User user = Json.fromJson(json, User.class);

        userRepository.save(user);

        return ok();
    }

    public Result create(){
        JsonNode json = request().body().asJson();
        User user = Json.fromJson(json, User.class);
        user.setId(new ObjectId().toStringMongod());

        userRepository.save(user);

        return ok("");
    }

}
