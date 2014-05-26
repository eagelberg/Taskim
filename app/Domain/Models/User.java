package Domain.Models;

import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class User {

	@JsonProperty("_id")
	private String id;
	private String name;
	private String password;
	private String Initials;
	private UserStatus status;
	private List<String> boards = new ArrayList<String>();

	// default constructor
	public User() {
		setStatus(UserStatus.DISCONNECTED);
		setName("");
		setPassword("");
		setInitials("");

	}


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

	public UserStatus getStatus() {
		return status;
	}

	public void setStatus(UserStatus status) {
		this.status = status;
	}
	//</editor-fold>


	// this function is used to handle unknown properties send by the client
	@JsonAnySetter
	public void handleUnknown(String key, Object value) {
		// handle unkown property
	}
}
