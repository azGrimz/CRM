import { AdicionarComponent } from './../../components/modals/movimentacao/adicionar/adicionar.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Observable, catchError, of } from 'rxjs';
import { Container } from '../../models/Container';
import { ContainerService } from '../../services/container.service';
import { ModalAddContainerComponent } from '../../components/modal-add-container/modal-add-container.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

  containers$: Observable<Container[]> = new Observable<any>
  displayedColumns = ['cliente','identificacao','tipo','status','categoria','actions','movimentacao'];

  constructor(
    private containerService: ContainerService,
    private matDialog: MatDialog
  ){
    this.getCourses();
  }


  getCourses(){
    this.containers$ =  this.containerService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  openModelAdd(){
    //this.router.navigate(['courses/dialog']);
    this.matDialog.open(ModalAddContainerComponent,{
      data:{
        type: "newContainer"
      }
    }).beforeClosed().subscribe(() => this.getCourses());
  }

  editContainer(container: Object){


    this.matDialog.open(ModalAddContainerComponent,{
      width:'300px',
      data:{
        container: container,
        type: "editContainer"
      }
    }).beforeClosed().subscribe(() => this.getCourses());

  }


  deleteContainer(id: Number){
    this.matDialog.open(ModalAddContainerComponent,{
      width:'300px',
      data:{
        id: id,
        type: "deleteContainer"
      }
    }).beforeClosed().subscribe(() => this.getCourses());

   }


   criarMovimentacao(id:number){
    this.matDialog.open(AdicionarComponent,{
      width:'300px',
      data:{
        id: id,
        type: "newMovimentacao"
      }
    }).beforeClosed().subscribe(() => this.getCourses());
   }
}
