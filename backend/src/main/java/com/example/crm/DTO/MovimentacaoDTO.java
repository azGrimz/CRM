package com.example.crm.DTO;


import com.example.crm.Model.Container;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Calendar;

@Data
public class MovimentacaoDTO {
    private Long movimentacao_id;
    private String tipo;
    private Calendar dataInicio;
    private Calendar dataFim;

    private Container container;



    @JsonProperty("container")
    private void unpackNested(Long container_id) {
        this.container = new Container();
        container.setId(container_id);
    }
}
