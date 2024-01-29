
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Container } from '../models/Container';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  private readonly listContainer = 'http://localhost:8081/containerAPI/listContainers'
  private readonly newContainer = 'http://localhost:8081/containerAPI/newContainer'
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Container[]>(this.listContainer)
    .pipe(
      first(),
      delay(500)
    );
  }



  save(record: Container){
    return this.http.post<Container>(this.newContainer,record).pipe(first());
  }

}