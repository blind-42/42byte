package com.blind.api.domain.board.v1.domain;

import com.blind.api.global.entity.BaseTimeEntity;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    Long id;

    @NotNull
    @Column(name="name")
    String name;

    @Builder
    public Board(String name){
        Assert.hasText(name,"board_name must not be empty");
        this.name = name;
    }
}
