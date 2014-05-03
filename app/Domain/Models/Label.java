package Domain.Models;

/**
 * Created by Micha on 5/2/14.
 */
public class Label {
	private String id;
	private String title;
	private String color;

	public Label(String title) {
		this.title = title;
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

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
}
