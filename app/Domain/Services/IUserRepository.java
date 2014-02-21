package Domain.Services;

import Domain.Models.User;

public interface IUserRepository {
    public User getUser(String name,String password);

    public void save(User user);
}
