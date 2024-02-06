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
  constructor(private http: HttpClient) {
   }

   list(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.listMovimentacao+id)
  }

   saveMovimentacao(record: Movimentacao){
    console.log(record);

    return this.http.post<Movimentacao>(this.newMovimentacao,record).pipe(first());
  }

}
