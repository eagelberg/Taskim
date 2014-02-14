package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

public class Board  {

    @JsonProperty("name")
    private String name;
    private String id;

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
}
