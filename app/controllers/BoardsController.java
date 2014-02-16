package controllers;

import Domain.Models.Board;
import Domain.Services.BoardsRepository;
import Domain.Services.IBoardsRepository;
import Infrastructure.IJsonMapper;
import com.google.inject.Inject;
import org.bson.types.ObjectId;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

public class BoardsController extends Controller {

    private IBoardsRepository repository;
    private IJsonMapper jsonMapper;

    @Inject
    public BoardsController(IBoardsRepository repository, IJsonMapper jsonMapper) {
        this.repository = repository;
        this.jsonMapper = jsonMapper;
    }

    public Result get(String id) {
        Board board = repository.getById(id);
        if(board != null)
            return ok(jsonMapper.toJson(board));

        return ok("board not found");
    }

    public Result all() {
        List<Board> boards = repository.all();
        return ok(jsonMapper.toJson(boards));
    }
}
