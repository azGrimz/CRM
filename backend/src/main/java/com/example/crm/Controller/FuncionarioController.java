package com.example.crm.Controller;


import com.example.crm.DTO.LoginDTO;
import com.example.crm.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class FuncionarioController {

    @Autowired
    private LoginService service;
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody LoginDTO userData){
        Boolean exists = service.login(userData);
        if(exists) return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

}
