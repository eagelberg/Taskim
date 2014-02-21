package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class Users {

    private String id;
    private String name;
    private String password;

    private List<Board> boards = new ArrayList<Board>();

    public List<Board> getBoards() {
        List<Board> boardListCopy = new ArrayList<Board>();
        boardListCopy.addAll(boards);
        return boardListCopy;
    }

    public void setBoards(List<Board> boards) {
        this.boards = boards;
    }

    public void addBoard(Board board){
        boards.add(board);
    }

    public void removeBoard(Board board){
        boards.remove(board);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @ObjectId
    @JsonProperty("_id")
    public String getId() {
        return id;
    }

    @ObjectId
    @JsonProperty("_id")
    public void setId(String id) {
        this.id = id;
    }
}
