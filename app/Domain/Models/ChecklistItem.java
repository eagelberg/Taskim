package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

/**
 * Created by Micha on 5/1/14.
 */
public class ChecklistItem {

	@JsonProperty("_id")
	private String id;
	private String name;
	private boolean value;

	// default constructor
	public ChecklistItem() {
		initChecklistItem("", false);
	}

	public ChecklistItem(String name) {
		initChecklistItem(name, false);
	}

	public ChecklistItem(String name, boolean value) {
		initChecklistItem(name, value);
	}

	public void initChecklistItem(String name, boolean value) {
		this.name = name;
		this.value = value;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isValue() {
		return value;
	}

	public void setValue(boolean value) {
		this.value = value;
	}
}
