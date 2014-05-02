package Domain.Models;

/**
 * Created by Micha on 5/1/14.
 */
public class ChecklistItem {

	private String id;
	private String name;
	private boolean value;

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

	public String getId() {
		return id;
	}

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
