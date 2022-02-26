package com.blind.api.global.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PageResponseDTO<T>{
    ThreadLocal<List<T>> contents;
    ThreadLocal<Integer> page;
    ThreadLocal<Integer> pages;

    public PageResponseDTO(){
        super();
        this.contents = new ThreadLocal<List<T>>(){
            @Override public List<T> initialValue() {
                return new ArrayList<T>();
            }
        };
        this.page = new ThreadLocal<>();
        this.pages = new ThreadLocal<>();
    }
}
