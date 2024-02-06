package com.example.crm.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Data
@Entity
@ToString
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



    @OneToMany(mappedBy = "container",targetEntity=Movimentacao.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL )
    private List<Movimentacao> movimentacao;
}
