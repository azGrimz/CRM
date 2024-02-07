package com.example.crm.Repository;

import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContainerRepository extends JpaRepository <Container, Long> {


}
