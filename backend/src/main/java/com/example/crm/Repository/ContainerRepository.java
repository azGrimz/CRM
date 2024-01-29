package com.example.crm.Repository;

import com.example.crm.DTO.ContainerDTO;
import com.example.crm.Model.Container;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContainerRepository extends JpaRepository <Container, Long> {

}
