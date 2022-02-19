package com.blind.api.global.Trace.service;

import com.blind.api.global.Trace.domain.TraceStatus;

public interface LogTrace {
    TraceStatus begin(String message);
    void end(TraceStatus status);
    void exception(TraceStatus status, Exception e);
}
