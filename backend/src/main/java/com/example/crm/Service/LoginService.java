package com.example.crm.Service;

import com.example.crm.DTO.LoginDTO;
import com.example.crm.Model.Funcionario;
import com.example.crm.Repository.LoginFuncRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class LoginService {


    @Autowired
    private LoginFuncRepository repo;

    public Boolean login(LoginDTO userData){
        Optional<Funcionario> login = repo.findByNameAndPassword(userData.getLogin(),userData.getPassword());
        if(login.isPresent()){
            return true;
        }
        return false;
    }


}
