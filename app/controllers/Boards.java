package controllers;

import Domain.Models.Board;
import Domain.Services.BoardsRepository;
import com.google.inject.Inject;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

/**
 * Created by itay on 2/15/14.
 */
public class Boards extends Controller {

    private BoardsRepository repository;

    @Inject
    public Boards(BoardsRepository repository) {
        this.repository = repository;
    }

    public Result get() {
        List<Board> boards = repository.All();
        return ok(Json.toJson(boards));
    }
}
