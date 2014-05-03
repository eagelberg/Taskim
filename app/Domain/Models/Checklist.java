package Domain.Models;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Micha on 5/1/14.
 */
public class Checklist {

	private String id;
	private String title;
	private List<ChecklistItem> items;

	public Checklist(String title) {
		this.title = title;
 	}

	public void addItem(ChecklistItem item) {
		this.items.add(item);
	}

	public void removeItem(ChecklistItem item) {
		this.items.remove(item);
	}

	public String getId() {
		return id;
	}

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
}
