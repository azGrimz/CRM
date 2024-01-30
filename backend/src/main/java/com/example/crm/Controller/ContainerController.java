package com.example.crm.Controller;

import com.example.crm.Model.Container;
import com.example.crm.Repository.ContainerRepository;
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
        return containerRepository.save(container);
    }

    @PutMapping("/editContainer")
    public ResponseEntity<Container> editContainer(@RequestBody Container container){

        if(!containerRepository.findById(container.getId()).isEmpty()){
            return ResponseEntity.status(HttpStatus.CREATED).body(containerRepository.save(container));
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping(value="/deleteContainer/{id}")
    public ResponseEntity<Boolean> deleteContainer(@PathVariable("id")Long id){
        containerRepository.deleteById(id);
        return ResponseEntity.ok(!(containerRepository.findById(id)!=null));
    }
}
