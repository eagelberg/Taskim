package Domain.Services;

import Domain.Models.User;
import com.google.inject.Inject;
import org.mongojack.DBQuery;
import org.mongojack.JacksonDBCollection;
import play.Application;
import play.modules.mongojack.MongoDBPlugin;

public class UserRepository implements IUserRepository {

    private JacksonDBCollection<User, String> userCollection;

    @Inject
    public UserRepository(Application app) {
        userCollection = app.plugin(MongoDBPlugin.class).getCollection("Users", User.class, String.class);
    }

    @Override
    public User getUser(String name,String password){
        return userCollection.findOne(DBQuery.is("name",name).is("password",password));
    }

    @Override
    public void save(User user) {
        userCollection.save(user);
    }
}
