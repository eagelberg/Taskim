package Domain.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class Card {

    @JsonProperty("_id")
    private String id;
    private String title;
    private String description;
    private List<Comment> comments = new ArrayList<Comment>();

   public Card(){
       Comment comment = new Comment();
       comment.setContent("test");
       comments.add(comment);
   }

    //<editor-fold desc="Getters and Setters">
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() { return description; }
    public void setDescription(String description) {this.description = description;}

    public List<Comment> getComments() {
        List<Comment> commentsCopy = new ArrayList<Comment>();
        commentsCopy.addAll(comments);
        return comments;
    }
    //</editor-fold>
}
