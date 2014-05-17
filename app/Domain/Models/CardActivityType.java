package Domain.Models;

import com.fasterxml.jackson.annotation.JsonCreator;

/**
 * Created by Micha on 5/2/14.
 */
public enum CardActivityType {
	ACTIVITY("activity"), COMMENT("comment");

	private String activityTypeRep;

	CardActivityType(String activityTypeRep) {
		this.activityTypeRep = activityTypeRep;
	}

	/**
	 * this function used for helping jackson deserializing the enum
	 *
	 * @param value
	 * @return
	 */
	@JsonCreator
	public static CardActivityType forValue(String value) {
		for (CardActivityType cardActivityType : CardActivityType.values()) {
			if (cardActivityType.getActivityTypeRep().equalsIgnoreCase(value)) {
				return cardActivityType;
			}
		}

		return null;
	}

	public String getActivityTypeRep() {
		return activityTypeRep;
	}

	public void setActivityTypeRep(String activityTypeRep) {
		this.activityTypeRep = activityTypeRep;
	}
}
