package com.example.crm.Service;


import com.example.crm.Controller.MovimentcaoControler;
import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import com.example.crm.Repository.MovimentacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class MovimentacaoService {

    @Autowired
    private MovimentacaoRepository movimentacaoRepository;


    public Movimentacao criarMovimentcacao(Movimentacao movimentacao){
        return movimentacaoRepository.save(movimentacao);
    }

}