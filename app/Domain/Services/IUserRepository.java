package Domain.Services;

import Domain.Models.User;

import java.util.List;

public interface IUserRepository {
    public User getByLoginData(String name,String password);
    public User getById(String id);
    public List<User> getByFilter(String filter);

    public void save(User user);
}
