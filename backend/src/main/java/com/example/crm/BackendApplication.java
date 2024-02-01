package com.example.crm;

import com.example.crm.Model.Container;
import com.example.crm.Model.Movimentacao;
import com.example.crm.Repository.ContainerRepository;
import com.example.crm.Repository.LoginFuncRepository;
import com.example.crm.Repository.MovimentacaoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Calendar;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(LoginFuncRepository loginFuncRepository) {
        return args -> {

        //    containerRepository.deleteAll();
        //    movimentacaoRepository.deleteAll();
//
        //    Container c = new Container();
        //    c.setCliente("Maersk");
        //    c.setIdentificacao("TEST123456");
        //    c.setTipo(Long.valueOf(20));
        //    c.setStatus("Cheio");
        //    c.setCategoria("Importação");
//
//
//
        //    Movimentacao m = new Movimentacao();
        //    m.setTipoMovimentacao("embarque");
        //    m.setDateHoraInicio(Calendar.getInstance());
        //    m.setDataHoraFim(Calendar.getInstance());
        //    m.setContainer(c);
        //    containerRepository.save(c);
        //    movimentacaoRepository.save(m);
        };
    }
}
