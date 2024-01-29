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
}
