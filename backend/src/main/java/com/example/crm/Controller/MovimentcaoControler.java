package com.example.crm.Controller;


import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import com.example.crm.Repository.MovimentacaoRepository;
import com.example.crm.Service.MovimentacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/movimentacaoAPI")
public class MovimentcaoControler {

    @Autowired
    private MovimentacaoRepository movimentacaoRepository;

    @Autowired
    private MovimentacaoService movimentacaoService;


    @GetMapping("/listMovimentacao")
    public List<Movimentacao> list(){
        return movimentacaoRepository.findAll();
    }
}
