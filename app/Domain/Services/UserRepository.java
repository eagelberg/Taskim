package Domain.Services;

import Domain.Models.User;
import com.google.inject.Inject;
import org.mongojack.DBQuery;
import org.mongojack.JacksonDBCollection;
import play.Application;
import play.modules.mongojack.MongoDBPlugin;

import java.util.List;
import java.util.regex.Pattern;

public class UserRepository implements IUserRepository {

    private JacksonDBCollection<User, String> userCollection;

    @Inject
    public UserRepository(Application app) {
        userCollection = app.plugin(MongoDBPlugin.class).getCollection("Users", User.class, String.class);
    }

    @Override
    public User getByLoginData(String name, String password){
        return userCollection.findOne(DBQuery.is("name",name).is("password",password));
    }

    @Override
    public User getById(String id) {
        return userCollection.findOneById(id);
    }

    @Override
    public List<User> getByFilter(String filter) {
        return userCollection.find(DBQuery.regex("name", Pattern.compile(".*" + filter + ".*"))).toArray();
    }

    @Override
    public void save(User user) {
        userCollection.save(user);
    }

    @Override
    public List<User> getAllByIds(List<String> users) {
        return userCollection.find(DBQuery.in("_id",users)).toArray();
    }
}
