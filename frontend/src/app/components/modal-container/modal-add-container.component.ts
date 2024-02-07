import { Container } from '../../models/Container';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContainerService } from '../../services/container/container.service';
import { MovimentacaoService } from '../../services/movimentacao/movimentacao.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-container',
  templateUrl: './modal-add-container.component.html',
  styleUrl: './modal-add-container.component.css'
})
export class ModalAddContainerComponent   {

  formNewContainer: FormGroup;
  formEditContainer: FormGroup;
  public identify:number;
  constructor(private FormBuilder: FormBuilder,
    private serviceContainer: ContainerService ,
    private snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: any){

      const containerData = data.container || {};
      this.identify = data.id
      this.formEditContainer = this.FormBuilder.group({


        id:[containerData.id,Validators.required],
        cliente:[containerData.cliente,Validators.required],
        identificacao:[containerData.identificacao,Validators.required],
        tipo:[containerData.tipo,Validators.required],
        status:[containerData.status,Validators.required],
        categoria:[containerData.categoria,Validators.required]
      });



      this.formNewContainer = this.FormBuilder.group({
        cliente:['',Validators.required],
        identificacao:['',Validators.required],
        tipo:['',Validators.required],
        status:['',Validators.required],
        categoria:['',Validators.required]
      });


  }

  onNewContainer(){
    this.serviceContainer.saveContainer(this.formNewContainer.value)
    .subscribe(result => this.onSucessNewContainer(),error => this.onErrorNewContainer());
   }

   onEditContainer(){
    this.serviceContainer.editContainers(this.formEditContainer.value)
    .subscribe(result => this.onSucessEditContainer(),error => this.onErrorEditContainer());
   }

   onDeleteContainer(){
    this.serviceContainer.delete(this.identify)
    .subscribe(result => this.onSucessDeleteContainer(),error => this.onErrorDeleteContainer());
   }

   private onSucessNewContainer(){
    this.snackBar.open('Sucesso ao cadastrar o container','',{duration:5000});
  }

   private onErrorNewContainer(){
     this.snackBar.open('Erro ao cadastrar o container','',{duration:5000});
   }

   private onSucessEditContainer(){
    this.snackBar.open('Sucesso ao editar o container','',{duration:5000});
  }

   private onErrorEditContainer(){
     this.snackBar.open('Erro ao editar o container','',{duration:5000});
   }

   private onSucessDeleteContainer(){
    this.snackBar.open('Sucesso ao deletar o container','',{duration:5000});
  }

   private onErrorDeleteContainer(){
     this.snackBar.open('Erro ao deletar o container','',{duration:5000});
   }

}
