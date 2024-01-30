import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContainerService } from '../../../services/container.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-container',

  templateUrl: './delete-container.component.html',
  styleUrl: './delete-container.component.css'
})
export class DeleteContainerComponent {
  public identify: Number;
  constructor(private formBuilder: FormBuilder,
    private service: ContainerService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: number){
      this.identify = id
  }

  onDelete(){
    this.service.delete(this.identify).subscribe(result => this.onSucess ,error => this.onError)
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:5000});
  }
  private onSucess(){
    this.snackBar.open('Sucesso ao cadastrar o curso','',{duration:5000});
  }
}
