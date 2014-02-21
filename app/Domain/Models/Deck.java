package Domain.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class Deck {

    @JsonProperty("_id")
    private String id;
    private String name;
    private List<Card> cards = new ArrayList<Card>();

    public void AddCard(Card card) {
        cards.add(card);
    }

    public void RemoveCard(Card card) {
        cards.remove(card);
    }

    //<editor-fold desc="Getters and Setters">
    public String getId() {
        return id;
    }
    public void setId(String id) { this.id = id; }

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
    //</editor-fold>
}
