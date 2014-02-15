package Domain.Services;

import Domain.Models.Board;
import org.bson.types.ObjectId;

import java.util.List;

/**
 * Created by itay on 2/15/14.
 */
public interface IBoardsRepository {
    void save(Board board);
    public Board getById(ObjectId objectId);
    public List<Board> all();
}
    