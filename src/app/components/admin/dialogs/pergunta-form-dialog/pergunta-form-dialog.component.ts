import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
	MatDialogRef, MAT_DIALOG_DATA 
} from '@angular/material';

import { Pergunta } from '../../../../models';

@Component({
  selector: 'app-pergunta-form-dialog',
  templateUrl: './pergunta-form-dialog.component.html',
  styleUrls: ['./pergunta-form-dialog.component.css']
})
export class PerguntaFormDialogComponent implements OnInit {

  perguntaId: string;
  pergunta: Pergunta;
  form: FormGroup;
  perguntaForm: Pergunta;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PerguntaFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	this.perguntaForm = this.obterDadosPergunta(this.data);
  	this.gerarForm();
  }

  obterDadosPergunta(data: any): Pergunta {
  	if (!data) { // cadastro
  		return { questao: '', opcoes: Array<string>(4), correta: -1 };
  	}
  	// atualização
  	this.perguntaId = data.pergunta.id;
  	return data.pergunta as Pergunta;
  }

  gerarForm() {
    this.form = this.fb.group({
      questao: [ this.perguntaForm.questao,   [ Validators.required ]],
      opcao1:  [ this.perguntaForm.opcoes[0], [ Validators.required ]],
      opcao2:  [ this.perguntaForm.opcoes[1], [ Validators.required ]],
      opcao3:  [ this.perguntaForm.opcoes[2], [ Validators.required ]],
      opcao4:  [ this.perguntaForm.opcoes[3], [ Validators.required ]],
      correta: [ this.perguntaForm.correta,   [ Validators.required ]]
    });
  }

  enviar() {
  	if (this.form.invalid) {
  		this.pergunta = null;
  	} else {
  		const dados: any = this.form.value;
  		const opcoes: Array<string> = [ 
  			dados.opcao1, 
  			dados.opcao2, 
  			dados.opcao3, 
  			dados.opcao4
  		];
  		this.pergunta = {
  			questao: dados.questao,
  			opcoes: opcoes,
  			correta: dados.correta
  		};
  	}
  	this.dialogRef.close({ 
  		pergunta: this.pergunta, 
  		id: this.perguntaId
  	});
  }

  fecharDialog() {
    this.dialogRef.close();
  }

}
