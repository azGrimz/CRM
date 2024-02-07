import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MovimentacaoService } from '../../services/movimentacao/movimentacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movimentacao } from '../../models/Movimentacao';
import { Observable, catchError, of } from 'rxjs';
import { Container } from '../../models/Container';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  form: FormGroup;
  public container: number;
  movimentacao$: Observable<Movimentacao[]> = new Observable<any>
  container$!: Observable<Movimentacao[]>
  displayedColumns = ['container','tipo','dataInicio','dataFim','actions'];

dataMov:any

  constructor(private FormBuilder: FormBuilder,
    private serviceMovimentacao: MovimentacaoService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.container = data.id;

    console.log(data)
    this.form = this.FormBuilder.group({
      tipo:['',Validators.required],
      dataInicio:['',Validators.required],
      dataFim:['',Validators.required],
      container:[data.id,Validators.required]
    });


  this.getMovimentaacos();

  }


 getMovimentaacos(){
   this.movimentacao$ = this.serviceMovimentacao.list(this.container)

 }


//getMovimentacao(){
// this.serviceMovimentacao.list(this.container).subscribe((response:any) =>{
//   this.container$ = response.data;
//   console.log(response.data )
// })
//}

  onSubmit(){
   this.serviceMovimentacao.saveMovimentacao(this.form.value)
   .subscribe(result => this.onSucess(),error => this.onError());
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:5000});
  }
  private onSucess(){
    this.snackBar.open('Sucesso ao cadastrar o curso','',{duration:5000});
  }
}
