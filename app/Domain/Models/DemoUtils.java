package Domain.Models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * Created by Micha on 5/16/14.
 */

/*
   this is a temporary class for mocking values
 */
public class DemoUtils {

	private static List<User> demoMembers = new ArrayList<>();
	private static List<Label> demoLabels = new ArrayList<>();
	private static final Object lock = new Object();

	public static User getRandomMember() {
		synchronized (lock) {
			return getMembers().get(new Random().nextInt(demoMembers.size()));
		}
	}

	public static Label getRandomLabel() {
		synchronized (lock) {
			return getLabels().get(new Random().nextInt(demoLabels.size()));
		}
	}

	public static List<User> getAllMembers() {

		synchronized (lock) {
			return getMembers();
		}

	}


	public static Long getRandomDate() {
		final int monthConstant = 1000 * 60 * 60 * 24 * 7 * 30;
		Random rand = new Random();
		Long currentTime = System.currentTimeMillis();
		Long randBackTravel = new Long(rand.nextInt(monthConstant));
		return new Date(Math.abs(currentTime - randBackTravel)).getTime();
	}

	private static List<User> getMembers() {
		synchronized (lock) {
			if (demoMembers == null || demoMembers.size() == 0) {

				User micha = new User();
				micha.setName("Micha Sherman");
				micha.setInitials("MS");
				micha.setStatus(UserStatus.DISCONNECTED);

				User itay = new User();
				itay.setName("Itay Maoz");
				itay.setInitials("IM");
				itay.setStatus(UserStatus.IDLE);

				User guy = new User();
				guy.setName("Guy Eagelberg");
				guy.setInitials("GE");
				guy.setStatus(UserStatus.ACTIVE);

				demoMembers.add(micha);
				demoMembers.add(guy);
				demoMembers.add(itay);
			}
			return demoMembers;

		}
	}

	public static List<Label> getLabels() {

		synchronized (lock) {
			if (demoLabels == null || demoLabels.size() == 0) {

				for (LabelColor labelColor : LabelColor.values()) {

					Label label = new Label();
					label.setColor(labelColor);

					switch (labelColor) {
						case RED: {
							label.setTitle("urgent");
							break;
						}

						case GREEN: {
							label.setTitle("nice to have");
							break;
						}

						case PURPLE: {
							label.setTitle("critical");
							break;
						}

						case ORANGE: {
							label.setTitle("important");
							break;
						}

					}

					demoLabels.add(label);
				}
			}

			return demoLabels;
		}

	}
}
