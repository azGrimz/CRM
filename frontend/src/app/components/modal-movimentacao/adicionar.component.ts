import { Movimentacao } from './../../models/Container';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, ViewChild } from '@angular/core';
import { MovimentacaoService } from '../../services/movimentacao/movimentacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Container } from '../../models/Container';
import { error } from 'console';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  form: FormGroup;
  formEdit: FormGroup;


  public container: number;
  movimentacao$: Observable<Movimentacao[]> = new Observable<any>
  container$!: Observable<Movimentacao[]>
  displayedColumns = ['tipo','dataInicio','dataFim','actions'];



  constructor(private FormBuilder: FormBuilder,
    private serviceMovimentacao: MovimentacaoService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.container = data.id;
      const movimentacaoData = this.getMovimentaacos();




    //RETORNA O FORMULARIO VÁZIO PARA SER PREENCHIDO
    this.form = this.FormBuilder.group({
      tipo:['',Validators.required],
      dataInicio:['',Validators.required],
      dataFim:['',Validators.required],
      container:[data.id,Validators.required]
    });

    //RETORNA OS FORMULARIOS PREENCHIDOS
    this.formEdit = this.FormBuilder.group({
      tipo:['',Validators.required],
      dataInicio:['',Validators.required],
      dataFim:['',Validators.required],
      container:['',Validators.required]
    });


  this.getMovimentaacos();
    console.log(movimentacaoData)
  }


 getMovimentaacos(){
   this.movimentacao$ = this.serviceMovimentacao.list(this.container)

 }



  onSubmit(){
   this.serviceMovimentacao.saveMovimentacao(this.form.value)
   .subscribe(result => this.onSucess(),error => this.onError());
  }


  onUpdateMovimentacao(){
    this.serviceMovimentacao.editMovimentcao(this.formEdit.value)
    .subscribe(result => this.onSucess(),error => this.onError())
  }




  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:5000});
  }
  private onSucess(){
    this.snackBar.open('Sucesso ao cadastrar o curso','',{duration:5000});
  }
}
