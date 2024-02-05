package com.example.crm.Controller;


import com.example.crm.DTO.MovimentacaoDTO;
import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import com.example.crm.Repository.MovimentacaoRepository;
import com.example.crm.Service.MovimentacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/newMovimentacao")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Movimentacao create(@RequestBody MovimentacaoDTO movimentacaoDTO){
        return  movimentacaoService.criarMovimentcacao(movimentacaoDTO);
    }

}
