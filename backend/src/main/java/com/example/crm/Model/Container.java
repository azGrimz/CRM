package com.example.crm.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Entity
@Table(name = "containers")
public class Container {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="container_id")
    private @Setter @Getter Long id;

    @Column(name="container_cliente")
    private @Setter @Getter String cliente;

    @Column(name="container_identificação")
    private @Setter @Getter String identificacao;

    @Column(name="container_tipo")
    private @Setter @Getter Long tipo;

    @Column(name="container_status")
    private @Setter @Getter String status;

    @Column(name="container_categoria")
    private @Setter @Getter String categoria;

    @OneToMany
    private List<Movimentacao> Movimentacao;
}
