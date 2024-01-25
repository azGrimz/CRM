package com.example.crm.Repository;

import com.example.crm.Model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginFuncRepository extends JpaRepository<Funcionario, Long> {
    /**
     * Método que retorna uma lista de clientes fazendo a busca pelo nome
     passado como parâmetro.
     *
     * @param name
     * @return lista de clientes
     */
    /** List<Course> findByNome(@Param("name") String name);*/

    /**
     * Método que retorna o cliente com apenas seu nome fazendo a busca
     com o id passado como parâmetro.
     *
     * @param id
     * @return cliente do id passado como parâmetro.
     */
    /** @Query("SELECT c.name,c.category FROM Course c where c.id = :id")
    Course findNomeById(@Param("id") Long id);**/

    /**
     * Método que retorna uma lista de clientes fazendo a busca pelo nome passado
     como parâmetro e ordenando os
     * clientes pelo nome.
     *
     * @param name
     * @return lista de clientes
     */
    /**  List<Course> findByNomeOrderByNome(@Param("name") String name);*/
}
