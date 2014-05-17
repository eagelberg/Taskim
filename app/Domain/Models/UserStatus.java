package Domain.Models;

import com.fasterxml.jackson.annotation.JsonCreator;

/**
 * Created by Micha on 5/16/14.
 */
public enum UserStatus {
	IDLE("idle"), ACTIVE("active"), DISCONNECTED("disconnected");

	private String statusValue;

	UserStatus(String statusValue) {
		this.statusValue = statusValue;
	}

	/**
	 * this function used for helping jackson deserializing the enum
	 * @param value
	 * @return
	 */
	@JsonCreator
	public static UserStatus forValue(String value) {
		for (UserStatus userStatus : UserStatus.values()) {
			if (userStatus.getStatusValue().equalsIgnoreCase(value)) {
				return userStatus;
			}
		}

		return null;
	}

	public String getStatusValue() {
		return statusValue;
	}

	public void setStatusValue(String statusValue) {
		this.statusValue = statusValue;
	}
}
