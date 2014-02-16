package Domain.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

/**
 * Created by itay on 2/15/14.
 */
public class Card {

    @JsonProperty("_id")
    private String id;
    private String title;

    //<editor-fold desc="Getters and Setters">
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    //</editor-fold>
}
