package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class Board {

	private String id;
	private String name;
	private List<Deck> decks = new ArrayList<Deck>();
	private List<String> users = new ArrayList<String>();
	private List<User> members = new ArrayList<User>();
	private List<Label> labels = new ArrayList<Label>();
	private String adminId;

	public void initialize(String adminId) {
		this.adminId = adminId;
		this.setId(new org.bson.types.ObjectId().toStringMongod());
		Deck todo = new Deck();
		todo.setId(new org.bson.types.ObjectId().toStringMongod());
		todo.setName("todo");
		Deck doing = new Deck();
		doing.setId(new org.bson.types.ObjectId().toStringMongod());
		doing.setName("doing");
		Deck done = new Deck();
		done.setId(new org.bson.types.ObjectId().toStringMongod());
		done.setName("done");

		// init default decks
		this.AddDeck(todo);
		this.AddDeck(doing);
		this.AddDeck(done);

		// init default labels
		this.initLabels();

		// add demo members
		this.addDemoMembers();
	}

	private void addDemoMembers() {
		for (User user : DemoUtils.getAllMembers()) {
			addMember(user);
		}
	}

	public void AddDeck(Deck deck) {
		decks.add(deck);
	}

	public void RemoveDeck(Deck deck) {
		decks.remove(deck);
	}

	//<editor-fold desc="Getters and Setters">
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public List<Deck> getDecks() {
		List<Deck> deckListCopy = new ArrayList<Deck>();
		deckListCopy.addAll(decks);
		return deckListCopy;
	}

	public List<String> getUsers() {
		List<String> usersCopy = new ArrayList<String>();
		usersCopy.addAll(users);
		return usersCopy;
	}

	public void addUser(String users) {
		this.users.add(users);
	}

	public void removeUser(String userId) {
		users.remove(userId);
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public List<Label> getLabels() {
		List<Label> labelCopy = new ArrayList<Label>();
		labelCopy.addAll(labels);
		return labelCopy;
	}

	public void setLabels(List<Label> labels) {
		this.labels = labels;
	}

	public void addLabel(Label label) {
		this.labels.add(label);
	}

	private void initLabels() {

		// TODO : uncomment for production!
//		for (LabelColor labelColor : LabelColor.values()) {
//			Label label = new Label();
//			label.setColor(labelColor);
//			addLabel(label);
//		}

		for (Label label : DemoUtils.getLabels()) {
			addLabel(label);
		}

	}

	public List<User> getMembers() {
		List<User> membersCopy = new ArrayList<User>();
		membersCopy.addAll(members);
		return membersCopy;
	}

	public void addMember(User member) {
		this.members.add(member);
	}

	public void setMembers(List<User> members) {
		this.members = members;
	}
	//</editor-fold>
}
