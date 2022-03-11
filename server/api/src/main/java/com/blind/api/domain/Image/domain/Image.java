package com.blind.api.domain.Image.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "image")
public class Image {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long    id;

    @NotNull
    @Column(name = "url")
    String  url;

    @NotNull
    @Column
    @Enumerated(EnumType.STRING)
    ImgType type;

    @Builder
    public Image(@NotNull String url, @NotNull ImgType type) {
        this.url = url;
        this.type = type;
    }
}
