package com.blind.api.domain.security.oauth.v2.domain;

import org.apache.commons.lang3.concurrent.TimedSemaphore;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class LoginDelay {
    private final TimedSemaphore semaphore;
    private final int TIME_PERIOD = 1;
    private final int ACCESS_LIMIT = 2;

    LoginDelay() {
        semaphore = new TimedSemaphore(TIME_PERIOD, TimeUnit.SECONDS, ACCESS_LIMIT);
    }

    int availableSlots() {
        return semaphore.getAvailablePermits();
    }

    public Object tryStart(java.lang.reflect.Method method, Object target, Object[] args) throws Throwable{
        Object result = null;
        try {
            semaphore.acquire();
            result = method.invoke(target,args);
        } catch (InterruptedException intEx) {
            intEx.printStackTrace();
        }
        return result;
    }
}
