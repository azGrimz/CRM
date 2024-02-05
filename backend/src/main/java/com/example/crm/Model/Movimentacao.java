package com.example.crm.Model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Calendar;


@Data
@Entity
public class Movimentacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movimentacao_id")
    private Long movimentacao_id;

    @Column(name = "movimentacao_tipomov")
    private String tipo;

    @Column(name = "movimentacao_datainicio")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar dataInicio;

    @Column(name = "movimentacao_datafim")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar dataFim;

    @ManyToOne(targetEntity = Container.class)
    @JsonIgnore
    @JoinColumn(name = "container_id",referencedColumnName = "container_id", foreignKey = @ForeignKey(name = "fk_container"))
    private Container container;




}
