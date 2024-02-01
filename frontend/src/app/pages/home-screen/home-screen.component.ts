import { AdicionarComponent } from './../../components/modals/movimentacao/adicionar/adicionar.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Observable, catchError, of } from 'rxjs';
import { Container } from '../../models/Container';
import { ContainerService } from '../../services/container.service';
import { ModalAddContainerComponent } from '../../components/modal-add-container/modal-add-container.component';
import { MatDialog } from '@angular/material/dialog';
import { EditContainerComponent } from '../../components/modals/edit-container/edit-container.component';
import { DeleteContainerComponent } from '../../components/modals/delete-container/delete-container.component';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

  containers$: Observable<Container[]> = new Observable<any>
  displayedColumns = ['id','cliente','identificacao','tipo','status','categoria','actions'];

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
      width:'300px',
    }).beforeClosed().subscribe(() => this.getCourses());
  }

  editContainer(container: Container){
    this.matDialog.open(EditContainerComponent,{
      width:'300px',
      data: container
    }).beforeClosed().subscribe(() => this.getCourses());

  }


  deleteContainer(id: Number){
    this.matDialog.open(DeleteContainerComponent,{
      width:'300px',
      data:id
    }).beforeClosed().subscribe(() => this.getCourses());

   }


   criarMovimentacao(id:number){
    this.matDialog.open(AdicionarComponent,{
      width:'300px',
      data:id
    }).beforeClosed().subscribe(() => this.getCourses());
   }
}
