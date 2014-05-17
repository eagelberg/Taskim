package Domain.Models;

/**
 * Created by Micha on 5/2/14.
 */

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

public class Label {

	@JsonProperty("_id")
	private String id;
	private String title;
	private LabelColor color;

	// default constructor
	public Label() {
		this.title = "";
	}

	public Label(String title, LabelColor color) {
		this.title = title;
		this.color = color;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LabelColor getColor() {
		return color;
	}

	public void setColor(LabelColor color) {
		this.color = color;
	}
}
