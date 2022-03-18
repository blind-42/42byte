package com.blind.api.domain.notification.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class NotiResponseDTO <T> {
    Integer total;
    List<T> contents;

    public NotiResponseDTO(){
        this.contents = new ArrayList<T>();
    }
}
