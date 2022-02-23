package com.blind.api.domain.board.v1.domain;

import com.blind.api.global.entity.BaseTimeEntity;
import com.sun.istack.NotNull;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Getter
@NoArgsConstructor
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    Long id;


    @Column(name="name")
    @ApiModelProperty(example = "Blind")
    String name;

    @Builder
    public Board(String name){
        this.name = name;
    }
}
