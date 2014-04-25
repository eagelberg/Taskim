package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class Board  {

    private String id;
    private String name;
    private List<Deck> decks = new ArrayList<Deck>();

    public void initialize() {
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

        this.AddDeck(todo);
        this.AddDeck(doing);
        this.AddDeck(done);
    }

    public void AddDeck(Deck deck) {
        decks.add(deck);
    }

    public void RemoveDeck(Deck deck){
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
    //</editor-fold>
}
