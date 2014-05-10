package Domain.Models;

import Domain.Services.UserRepository;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class ActiveUser implements IActiveUser {

    private UserRepository userRepository;

    @Inject
    public ActiveUser(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User get() {
        return userRepository.getByFilter("guy eagelberg").get(0);
    }
}
