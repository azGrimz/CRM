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
    private @Getter @Setter Long func_id;

    private @Getter @Setter String func_name;

    private @Getter @Setter String func_password;

    private @Getter @Setter String func_email;
}
