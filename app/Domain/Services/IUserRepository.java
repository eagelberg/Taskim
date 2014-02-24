package Domain.Services;

import Domain.Models.User;

public interface IUserRepository {
    public User getByLoginData(String name,String password);
    public User getById(String id);

    public void save(User user);
}
