package Domain.Models;

import com.fasterxml.jackson.annotation.JsonCreator;

/**
 * Created by Micha on 5/16/14.
 */
public enum LabelColor {
	GREEN("green"), YELLOW("yellow"), ORANGE("orange"), RED("red"), PURPLE("purple"), BLUE("blue");

	private String labelColorValue;

	LabelColor(String labelColorValue) {
		this.labelColorValue = labelColorValue;
	}

	/**
	 * this function used for helping jackson deserializing the enum
	 *
	 * @param value
	 * @return
	 */
	@JsonCreator
	public static LabelColor forValue(String value) {
		for (LabelColor labelColor : LabelColor.values()) {
			if (labelColor.getLabelColorValue().equalsIgnoreCase(value)) {
				return labelColor;
			}
		}

		return null;
	}

	public String getLabelColorValue() {
		return labelColorValue;
	}

	public void setLabelColorValue(String labelColorValue) {
		this.labelColorValue = labelColorValue;
	}
}
