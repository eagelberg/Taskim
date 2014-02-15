package Domain.Services;

import Domain.Models.Board;
import Domain.Models.Deck;
import com.google.inject.Inject;
import org.bson.types.ObjectId;
import org.mongojack.DBQuery;
import org.mongojack.JacksonDBCollection;
import play.Application;
import play.modules.mongojack.MongoDBPlugin;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by itay on 2/15/14.
 */
public class BoardsRepository {

    private JacksonDBCollection<Board, String> boardsCollection;

    @Inject
    public BoardsRepository(Application app) {
        boardsCollection = app.plugin(MongoDBPlugin.class).getCollection("Boards", Board.class, String.class);
    }

    public void save(Board board){
        boardsCollection.save(board);
    }

    public List<Board> all() {
        return boardsCollection.find().toArray();
    }
}
