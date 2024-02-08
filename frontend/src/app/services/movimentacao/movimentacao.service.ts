import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first } from 'rxjs';
import { Movimentacao } from '../../models/Movimentacao';
import { Container } from '../../models/Container';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {


  private readonly newMovimentacao = 'http://localhost:8081/movimentacaoAPI/newMovimentacao'
  private readonly listMovimentacao = 'http://localhost:8081/movimentacaoAPI/listMovimentacao/'
  private readonly editMovimentacao = 'http://localhost:8081/movimentacaoAPI/editMovimentacao'
  private readonly deleteMovimentacao = 'http://localhost:8081/movimentacaoAPI/deleteMovimentacao/'
  constructor(private http: HttpClient) {
   }

   list(id:number){

    return this.http.get<Movimentacao[]>(this.listMovimentacao+id)

  }

   saveMovimentacao(record: Movimentacao){
    console.log(record);

    return this.http.post<Movimentacao>(this.newMovimentacao,record).pipe(first());
  }

  editMovimentcao(record: Movimentacao){
    return this.http.put(this.editMovimentacao,record)
  }

  deleteContainer(id: number){
    return this.http.delete(this.deleteMovimentacao+id);
  }

}
