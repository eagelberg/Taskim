package Ioc;

import Domain.Services.BoardsRepository;
import Domain.Services.IBoardsRepository;
import Infrastructure.IJsonMapper;
import Infrastructure.JacksonJsonMapper;
import com.google.inject.AbstractModule;
import play.Application;

/**
 * Created by guy on 2/9/14.
 */
public class Binder extends AbstractModule{

    private Application application;

    public Binder(Application application) {
        this.application = application;
    }

    @Override
    protected void configure() {
        bind(Application.class).toInstance(application);
        bind(IJsonMapper.class).to(JacksonJsonMapper.class);
        bind(IBoardsRepository.class).to(BoardsRepository.class);
    }
}
