package com.example.crm.Service;

import com.example.crm.DTO.ContainerDTO;
import com.example.crm.DTO.LoginDTO;
import com.example.crm.Model.Container;
import com.example.crm.Repository.ContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContainerService {

    @Autowired
    ContainerRepository containerRepository;

    public Container criarContainer(Container container){
       return  containerRepository.save(container);
    }

}
