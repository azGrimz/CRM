package com.example.crm.Repository;

import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Long> {


    @Query("Select i  from Movimentacao i  Where i.container.id = ?1")
    List<Movimentacao> getMovimentacaoByContainerId(long id);

}
