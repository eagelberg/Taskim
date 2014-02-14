package Domain.Services;

import Domain.Models.Board;
import com.google.inject.Inject;
import org.mongojack.JacksonDBCollection;
import play.Application;
import play.modules.mongojack.MongoDBPlugin;

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

    public List<Board> All() {
        return boardsCollection.find().toArray();
    }
}
