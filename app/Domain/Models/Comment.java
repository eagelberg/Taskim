package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.Date;

public class Comment {

    private String id;
    private String content;
    private String userId;
    private Date date;

    //<editor-fold desc="Getters and Setters">
    @ObjectId
    @JsonProperty("_id")
    public String getId() { return id; }

    @ObjectId
    @JsonProperty("_id")
    public void setId(String id) { this.id = id; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }
    //</editor-fold>
}
