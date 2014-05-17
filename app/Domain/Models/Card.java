package Domain.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Card {

	@JsonProperty("_id")
	private String id;
	private String index;
	private String title;
	private String description;
	private List<Comment> comments = new ArrayList<Comment>();
	private List<CardActivity> activities = new ArrayList<CardActivity>();
	private List<Label> labels = new ArrayList<Label>();
	private List<User> members = new ArrayList<User>();
	private List<User> subscribedMembers = new ArrayList<User>();
	private List<Checklist> checklists = new ArrayList<Checklist>();
	private Date dueDate;
	private boolean isArchived;

	// default constructor
	public Card() {
		Comment comment = new Comment();
		comment.setContent("test");
		comments.add(comment);

		setDueDate(new Date());
		addDemoActivity();
		addDemoLabels();
		addDemoChecklists();
		addDemoMembers();
		addDemoSubscribedMembers();
	}


	//<editor-fold desc="Getters and Setters">
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Comment> getComments() {
		List<Comment> commentsCopy = new ArrayList<Comment>();
		commentsCopy.addAll(comments);
		return comments;
	}

	private void addDemoActivity() {
		CardActivity activity = new CardActivity();
		activity.setDate(DemoUtils.getRandomDate());
		List<String> info = new ArrayList<>();
		info.add("I'm trapped here!");
		activity.setInfo(info);
		activity.setType(CardActivityType.COMMENT);
		activity.setInitiator(DemoUtils.getRandomMember());
		addActivity(activity);

		activity = new CardActivity();
		activity.setDate(DemoUtils.getRandomDate());
		info = new ArrayList<>();
		info.add("is having a good day");
		activity.setInfo(info);
		activity.setType(CardActivityType.ACTIVITY);
		activity.setInitiator(DemoUtils.getRandomMember());
		addActivity(activity);


		activity = new CardActivity();
		activity.setDate(DemoUtils.getRandomDate());
		info = new ArrayList<>();
		info.add("take a woman");
		info.add("build her a home");
		activity.setInfo(info);
		activity.setType(CardActivityType.ACTIVITY);
		activity.setInitiator(DemoUtils.getRandomMember());
		addActivity(activity);
	}

	private void addDemoLabels() {
		addLabel(DemoUtils.getRandomLabel());
	}

	private void addDemoChecklists() {
		Checklist checklist = new Checklist("build taskim");
		checklist.addItem(new ChecklistItem("assemle the A-team", true));
		checklist.addItem(new ChecklistItem("kill some bad guys"));
		checklist.addItem(new ChecklistItem("play dramatic song"));
		addChecklist(checklist);

		checklist = new Checklist("become rich");
		checklist.addItem(new ChecklistItem("rob a bank"));
		addChecklist(checklist);
	}

	private void addDemoMembers() {
		addMember(DemoUtils.getAllMembers().get(0));
		addMember(DemoUtils.getAllMembers().get(1));
	}

	private void addDemoSubscribedMembers() {
		addSubscribedMember(DemoUtils.getAllMembers().get(0));
		addSubscribedMember(DemoUtils.getAllMembers().get(2));
	}

	public void addActivity(CardActivity cardActivity) {
		this.activities.add(cardActivity);
	}

	public void addLabel(Label label) {
		this.labels.add(label);
	}

	public List<CardActivity> getActivities() {
		List<CardActivity> activityCopy = new ArrayList<CardActivity>();
		activityCopy.addAll(activities);
		return activityCopy;
	}

	public void setActivities(List<CardActivity> activities) {
		this.activities = activities;
	}

	public List<Label> getLabels() {
		List<Label> labelCopy = new ArrayList<Label>();
		labelCopy.addAll(labels);
		return labelCopy;
	}

	public void setLabels(List<Label> labels) {
		this.labels = labels;
	}

	public List<User> getMembers() {
		List<User> membersCopy = new ArrayList<User>();
		membersCopy.addAll(members);
		return membersCopy;
	}

	public void setMembers(List<User> members) {
		this.members = members;
	}

	public void addMember(User member) {
		this.members.add(member);
	}

	public void addChecklist(Checklist checklist) {
		this.checklists.add(checklist);
	}

	public List<Checklist> getChecklists() {
		List<Checklist> checklistsCopy = new ArrayList<Checklist>();
		checklistsCopy.addAll(checklists);
		return checklistsCopy;
	}

	public void setChecklists(List<Checklist> checklists) {
		this.checklists = checklists;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public boolean isArchived() {
		return isArchived;
	}

	public void setArchived(boolean isArchived) {
		this.isArchived = isArchived;
	}

	public void addSubscribedMember(User user) {
		this.subscribedMembers.add(user);
	}

	public void removeSubscribedMember(User user) {
		this.subscribedMembers.remove(user);
	}

	public List<User> getSubscribedMembers() {
		List<User> subscribedMembersCopy = new ArrayList<User>();
		subscribedMembersCopy.addAll(subscribedMembers);
		return subscribedMembersCopy;
	}

	public void setSubscribedMembers(List<User> subscribedMembers) {
		this.subscribedMembers = subscribedMembers;
	}

	public String getIndex() {
		return index;
	}

	public void setIndex(String index) {
		this.index = index;
	}

	//</editor-fold>
}
