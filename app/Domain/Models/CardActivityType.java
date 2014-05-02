package Domain.Models;

/**
 * Created by Micha on 5/2/14.
 */
public enum CardActivityType {
	ACTIVITY("activity"), COMMENT("comment");

	private String activityTypeRep;

	CardActivityType(String activityTypeRep) {
		this.activityTypeRep = activityTypeRep;
	}

	public String getActivityTypeRep() {
		return activityTypeRep;
	}

	public void setActivityTypeRep(String activityTypeRep) {
		this.activityTypeRep = activityTypeRep;
	}
}
