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

/**
 * Created by itay on 2/15/14.
 */
public class BoardsController extends Controller {

    private IBoardsRepository repository;
    private IJsonMapper jsonMapper;

    @Inject
    public BoardsController(IBoardsRepository repository, IJsonMapper jsonMapper) {
        this.repository = repository;
        this.jsonMapper = jsonMapper;
    }

    public Result get(String id) {
        Board board = repository.getById(new ObjectId(id));
        return ok(jsonMapper.toJson(board));
    }

    public Result get() {
        List<Board> boards = repository.all();
        return ok(jsonMapper.toJson(boards));
    }
}
