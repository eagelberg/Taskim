package controllers;

import Domain.Models.Board;
import Domain.Models.Card;
import Domain.Models.Deck;
import Domain.Services.BoardsRepository;
import Domain.Services.IBoardsRepository;
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
}
