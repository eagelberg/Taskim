package Domain.Models;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Micha on 5/2/14.
 */
public class CardActivity {
	private String id;
	private Long date;
	private User initiator;
	private CardActivityType type;
	private List<String> info;

	public CardActivity() {
		this.info = new ArrayList<String>();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<String> getInfo() {
		List<String> infoCopy = new ArrayList<String>();
		infoCopy.addAll(info);
		return info;
	}

	public void setInfo(List<String> info) {
		this.info = info;
	}

	public User getInitiator() {
		return initiator;
	}

	public void setInitiator(User initiator) {
		this.initiator = initiator;
	}

	public Long getDate() {
		return date;
	}

	public void setDate(Long date) {
		this.date = date;
	}

	public CardActivityType getType() {
		return type;
	}

	public void setType(CardActivityType type) {
		this.type = type;
	}
}
