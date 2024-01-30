package com.example.crm.Model;

import jakarta.persistence.ManyToOne;

public class Movimentacao {
    @ManyToOne
    private Container Container;
}
