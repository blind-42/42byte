package com.blind.api.domain.board.v1.domain;

import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.entity.BaseTimeEntity;
import com.sun.istack.NotNull;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.boot.web.embedded.undertow.UndertowWebServer;
import org.springframework.util.Assert;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@NoArgsConstructor
@DynamicInsert
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    Long id;


    @Column(name="name")
    @ApiModelProperty(example = "Blind")
    String name;

    @Column(name = "is_del", columnDefinition = "Integer default 0")
    Integer isDel;

    @JoinColumn(name = "user_Id")
    @OneToOne
    User Manager;

    @Builder
    public Board(User manager, String name){
        this.Manager = manager;
        this.name = name;
    }
}
