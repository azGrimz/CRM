import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MovimentacaoService } from '../../../../services/movimentacao/movimentacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private service: MovimentacaoService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: number){
    this.form = this.FormBuilder.group({
      tipo:['',Validators.required],
      dataInicio:['',Validators.required],
      dataFim:['',Validators.required],
      container:[id,Validators.required]
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
