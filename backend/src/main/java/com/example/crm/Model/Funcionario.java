package com.example.crm.Model;

import jakarta.persistence.GenerationType;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Entity
public class Funcionario {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="func_id")
    private Integer id;
    @Column(name="func_name")
    private String name;

    @Column(name="func_password")
    private String password;
    @Column(name="func_email")
    private  String email;

}
