package com.example.crm.Controller;

import com.example.crm.DTO.ContainerDTO;
import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import com.example.crm.Repository.ContainerRepository;
import com.example.crm.Service.ContainerService;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/containerAPI")
public class ContainerController  {

    @Autowired
    private ContainerRepository containerRepository;

    @Autowired
    private ContainerService containerService;

    public ContainerController(ContainerRepository containerRepository){
        this.containerRepository = containerRepository;
    }

    @GetMapping("/listContainers")
    public List<Container> list(){
        return containerRepository.findAll();
    }


    @PostMapping("/newContainer")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Container create(@RequestBody Container container){
        return  containerService.criarContainer(container);
    }


    @PutMapping("/editContainer")
    public ResponseEntity<Container> editContainer(@RequestBody Container container){
        return containerService.editarContainer(container);
    }

    @DeleteMapping(value="/deleteContainer/{id}")
    public ResponseEntity<Boolean> deleteContainer(@PathVariable("id")Long id){
        return containerService.deleteContainer(id);
    }



}
