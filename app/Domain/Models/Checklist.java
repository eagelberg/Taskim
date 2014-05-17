package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongojack.ObjectId;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Micha on 5/1/14.
 */
public class Checklist {

	@JsonProperty("_id")
	private String id;
	private String title;
	private List<ChecklistItem> items;
	private int completed;
	private String progressBarType;

	// default constructor
	public Checklist() {
		this.title = "";
		this.items = new ArrayList<>();
	}

	public Checklist(String title) {
		this.title = title;
		this.items = new ArrayList<>();
	}

	public void addItem(ChecklistItem item) {
		this.items.add(item);
	}

	public void removeItem(ChecklistItem item) {
		this.items.remove(item);
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

	public List<ChecklistItem> getItems() {
		List<ChecklistItem> checklistItemsCopy = new ArrayList<ChecklistItem>();
		checklistItemsCopy.addAll(items);
		return items;
	}

	public void setItems(List<ChecklistItem> items) {
		this.items = items;
	}

	public int getCompleted() {
		return completed;
	}

	public void setCompleted(int completed) {
		this.completed = completed;
	}

	public String getProgressBarType() {
		return progressBarType;
	}

	public void setProgressBarType(String progressBarType) {
		this.progressBarType = progressBarType;
	}
}
