package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class Deck {

	@JsonProperty("_id")
	private String id;
	private String name;
	private boolean isArchived;
	private String boardId;
	private int index;
	private List<Card> cards = new ArrayList<Card>();

	// default constructor
	public Deck() {
		this.name = "";
		this.isArchived = false;
	}

	public void AddCard(Card card) {
		cards.add(card);
	}

	public void RemoveCard(Card card) {
		cards.remove(card);
	}

	//<editor-fold desc="Getters and Setters">
	public String getBoardId() {
		return boardId;
	}

	public void setBoardId(String boardId) {
		this.boardId = boardId;
	}

	public boolean getIsArchived() {
		return isArchived;
	}

	public void setIsArchived(boolean isArchived) {
		this.isArchived = isArchived;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Card> getCards() {
		List<Card> cardListCopy = new ArrayList<Card>();
		cardListCopy.addAll(cards);
		return cardListCopy;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
	//</editor-fold>
}
