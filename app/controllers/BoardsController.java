package controllers;

import Domain.Models.*;
import Domain.Services.BoardsRepository;
import Domain.Services.IBoardsRepository;
import Domain.Services.IUserRepository;
import Infrastructure.IJsonMapper;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Inject;
import org.bson.types.ObjectId;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.io.IOException;
import java.util.List;

public class BoardsController extends Controller {

    private IBoardsRepository repository;
    private IJsonMapper jsonMapper;
    private IUserRepository userRepository;
    private IActiveUser activeUser;

    @Inject
    public BoardsController(IBoardsRepository repository, IJsonMapper jsonMapper,IUserRepository userRepository,IActiveUser activeUser) {
        this.repository = repository;
        this.jsonMapper = jsonMapper;
        this.userRepository = userRepository;
        this.activeUser = activeUser;
    }

    public Result get(String id) {
        Board board = repository.getById(id);
        if(board != null)
            return ok(jsonMapper.toJson(board));

        return ok("board not found");
    }

    public Result update(String id) throws IOException {
        JsonNode json = request().body().asJson();
        Board board = Json.fromJson(json, Board.class);

        for(Deck deck : board.getDecks())
        {
            if(deck.getId().isEmpty())
            {
                deck.setId(new ObjectId().toStringMongod());
            }

            for(Card card : deck.getCards())
            {
                if(card.getId().isEmpty())
                {
                    card.setId(new ObjectId().toStringMongod());
                }
            }


        }

        repository.save(board);

        return ok(jsonMapper.toJson(board));
    }

    public Result create(){
        JsonNode json = request().body().asJson();
        Board board = Json.fromJson(json, Board.class);
        //todo when we use cas then we should take user from server
        board.initialize(board.getUsers().get(0));

        repository.save(board);
        return ok(jsonMapper.toJson(board));
    }

    public Result all() {
        List<Board> boards = repository.all();
        return ok(jsonMapper.toJson(boards));
    }

    public Result getAllUsers(String id){
        Board board = repository.getById(id);
        return ok(jsonMapper.toJson(userRepository.getAllByIds(board.getUsers())));
    }

    public Result removeUserFromBoard(String boardId,String userId){
        User user = userRepository.getById(userId);
        Board board = repository.getById(boardId);
        if ((board != null) && (user != null) && (activeUser.get().getId().equals(board.getAdminId())) && (!board.getAdminId().equals(userId))){
            board.removeUser(userId);
            repository.save(board);
            user.removeBoard(boardId);
            userRepository.save(user);
            return ok();
        }
        return badRequest("");
    }
}
