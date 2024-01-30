package com.example.crm.DTO;


import lombok.Data;

import java.util.Calendar;

@Data
public class MovimentacaoDTO {
    private String TipoMovimentcao;
    private Calendar dataInicio;
    private Calendar dataFim;
}
