package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class User {

	private String id;
	private String name;
	private String password;
    private String Initials;
	private List<String> boards = new ArrayList<String>();

	public List<String> getBoards() {
		List<String> boardListCopy = new ArrayList<String>();
		boardListCopy.addAll(boards);
		return boardListCopy;
	}

	//<editor-fold desc="Getters and Setters">

	public void addBoard(String boardId) {
		boards.add(boardId);
	}

	public void removeBoard(String boardId) {
		boards.remove(boardId);
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

    public String getInitials() {
        return Initials;
    }

    public void setInitials(String initials) {
        Initials = initials;
    }
    //</editor-fold>
}
