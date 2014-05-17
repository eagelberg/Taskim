package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Micha on 5/2/14.
 */
public class CardActivity {
	@JsonProperty("_id")
	private String id;
	private Long date;
	private User initiator;
	private CardActivityType type;
	private List<String> info;
	private boolean readOnly;

	// default constructor
	public CardActivity() {
		this.info = new ArrayList<String>();
		this.readOnly = false;
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

	public void addInfo(String infoData) {
		this.info.add(infoData);
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

	public boolean isReadOnly() {
		return readOnly;
	}

	public void setReadOnly(boolean readOnly) {
		this.readOnly = readOnly;
	}
}
