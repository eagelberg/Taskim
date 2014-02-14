package Ioc;

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
    }
}
