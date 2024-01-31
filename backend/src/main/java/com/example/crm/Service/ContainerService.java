package com.example.crm.Service;

import com.example.crm.DTO.ContainerDTO;
import com.example.crm.DTO.LoginDTO;
import com.example.crm.Model.Container;
import com.example.crm.Repository.ContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class ContainerService {

    @Autowired
    ContainerRepository containerRepository;

    public Container criarContainer(Container container){
       return  containerRepository.save(container);
    }


    public ResponseEntity<Container> editarContainer(Container container){

        if(!containerRepository.findById(container.getId()).isEmpty()){
            return ResponseEntity.status(HttpStatus.CREATED).body(containerRepository.save(container));
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    public ResponseEntity<Boolean> deleteContainer(Long id){
        containerRepository.deleteById(id);
        return ResponseEntity.ok(!(containerRepository.findById(id)!=null));
    }
}
