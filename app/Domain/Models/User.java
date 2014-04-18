package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class User {

    private String id;
    private String name;
    private String password;

    private List<String> boards = new ArrayList<>();

    public List<String> getBoards() {
        List<String> boardListCopy = new ArrayList<>();
        boardListCopy.addAll(boards);
        return boardListCopy;
    }

    //<editor-fold desc="Getters and Setters">
    public void setBoards(List<String> boards) {
        this.boards = boards;
    }

    public void addBoard(Board board){
        boards.add(board.getId());
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
    //</editor-fold>
}
