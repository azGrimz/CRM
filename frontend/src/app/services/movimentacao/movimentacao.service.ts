import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Movimentacao } from '../../models/Movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private readonly newContainer = 'http://localhost:8081/movimentacaoAPI/newMovimentacao'
  constructor(private http: HttpClient) {
   }


   save(record: Movimentacao){
    console.log(record);

    return this.http.post<Movimentacao>(this.newContainer,record).pipe(first());
  }

}
