package Domain.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

/**
 * Created by itay on 2/15/14.
 */
public class Card {

    @JsonIgnore
    private org.bson.types.ObjectId id;

    private String title;

    //<editor-fold desc="Getters and Setters">
    @JsonProperty("_id")
    public String getObjectIdAsString(){return id.toStringMongod();}

    public org.bson.types.ObjectId getId() { return id; }
    public void setId(org.bson.types.ObjectId id) { this.id = id; }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    //</editor-fold>
}
