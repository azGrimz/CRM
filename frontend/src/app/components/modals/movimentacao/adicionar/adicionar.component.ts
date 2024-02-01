import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MovimentacaoService } from '../../../../services/movimentacao/movimentacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private service: MovimentacaoService,
    private snackBar: MatSnackBar){
    this.form = this.FormBuilder.group({
      cliente:['',Validators.required],
      identificacao:['',Validators.required],
      tipo:['',Validators.required],
      status:['',Validators.required],
      categoria:['',Validators.required]
    });
  }

  //onSubmit(){
  // this.service.save(this.form.value)
  // .subscribe(result => this.onSucess(),error => this.onError());
  //}

  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:5000});
  }
  private onSucess(){
    this.snackBar.open('Sucesso ao cadastrar o curso','',{duration:5000});
  }
}
