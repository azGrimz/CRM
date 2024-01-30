package com.example.crm.Model;

import jakarta.persistence.*;
import lombok.Data;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;

import java.util.Calendar;


@Data
@Entity
public class Movimentacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movimentacao_id")
    private Long id;

    @Column(name = "movimentacao_tipomov")
    private String TipoMovimentacao;

    @Column(name = "movimentacao_datainicio")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar DateHoraInicio;

    @Column(name = "movimentacao_datafim")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar DataHoraFim;

    @ManyToOne
    @JoinColumn(name = "containerId",referencedColumnName = "container_id", foreignKey = @ForeignKey(name = "fk_container"))
    private Container container;
}
