import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContainerService } from '../../../services/container.service';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrl: './edit-container.component.css'
})
export class EditContainerComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ContainerService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.form = this.formBuilder.group({
      cliente:[data.cliente,Validators.required],
      identificacao:[data.identificacao,Validators.required],
      tipo:[data.tipo,Validators.required],
      status:[data.status,Validators.required],
      categoria:[data.categoria,Validators.required]
    });
  }

  onUpdate(){
   this.service.save(this.form.value)
   .subscribe(result => this.onSucess(),error => this.onError());
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:5000});
  }
  private onSucess(){
    this.snackBar.open('Sucesso ao cadastrar o curso','',{duration:5000});
  }
}
