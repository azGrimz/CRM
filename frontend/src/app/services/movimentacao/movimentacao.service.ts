import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Movimentacao } from '../../models/Movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private readonly newMovimentacao = 'http://localhost:8081/movimentacaoAPI/newMovimentacao'
  private readonly listMovimentacao = 'http://localhost:8081/movimentacaoAPI/listMovimentacao'
  constructor(private http: HttpClient) {
   }

   list(){
    return this.http.get<Movimentacao[]>(this.listMovimentacao)
    .pipe(
      first(),
      delay(500)
    );
  }

   saveMovimentacao(record: Movimentacao){
    console.log(record);

    return this.http.post<Movimentacao>(this.newMovimentacao,record).pipe(first());
  }



}
