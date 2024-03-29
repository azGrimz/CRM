package com.example.crm.Service;


import com.example.crm.Controller.MovimentcaoControler;
import com.example.crm.DTO.MovimentacaoDTO;
import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import com.example.crm.Repository.MovimentacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class MovimentacaoService {

    @Autowired
    private MovimentacaoRepository movimentacaoRepository;



    public Movimentacao criarMovimentcacao(MovimentacaoDTO movimentacaoDTO){

        Movimentacao movimentacao = new Movimentacao();

        movimentacao.setTipo(movimentacaoDTO.getTipo());
        movimentacao.setDataInicio(movimentacaoDTO.getDataInicio());
        movimentacao.setDataFim(movimentacaoDTO.getDataFim());
        movimentacao.setContainer(movimentacaoDTO.getContainer());

        return movimentacaoRepository.save(movimentacao);
    }

    public ResponseEntity<Movimentacao> editMovimentacao(MovimentacaoDTO movimentacaoDTO){


        if(!movimentacaoRepository.findById(Long.valueOf(movimentacaoDTO.getMovimentacao_id())).isEmpty()){
            Movimentacao movimentacao = new Movimentacao();
            movimentacao.setTipo(movimentacaoDTO.getTipo());
            movimentacao.setDataInicio(movimentacaoDTO.getDataInicio());
            movimentacao.setDataFim(movimentacaoDTO.getDataFim());
            return ResponseEntity.status(HttpStatus.CREATED).body(movimentacaoRepository.save(movimentacao));
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    public ResponseEntity<Boolean> deleteMovimenticao(Long id){
        movimentacaoRepository.deleteById(id);
        return ResponseEntity.ok(!(movimentacaoRepository.findById(id)!=null));
    }


}
