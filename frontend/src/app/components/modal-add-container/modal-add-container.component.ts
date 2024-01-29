import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'app-modal-add-container',
  templateUrl: './modal-add-container.component.html',
  styleUrl: './modal-add-container.component.css'
})
export class ModalAddContainerComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ContainerService,
    private snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      cliente:['',Validators.required],
      identificacao:['',Validators.required],
      tipo:['',Validators.required],
      status:['',Validators.required],
      categoria:['',Validators.required]
    });
  }

  onSubmit(){
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
