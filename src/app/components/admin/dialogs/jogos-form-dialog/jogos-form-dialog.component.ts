import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-jogos-form-dialog',
  templateUrl: './jogos-form-dialog.component.html',
  styleUrls: ['./jogos-form-dialog.component.css']
})
export class JogosFormDialogComponent implements OnInit {

  readonly QTD_JOGOS_PADRAO: number = 10;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<JogosFormDialogComponent>) { }

  ngOnInit() {
  	this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      qtdJogos: [
      	this.QTD_JOGOS_PADRAO, 
      	[ Validators.required ]
      ],
      manterJogosExistentes: [ 
      	false, 
      	[ Validators.required ]
      ]
    });
  }

  enviar() {
  	if (!this.form.invalid) {
  	  this.dialogRef.close(this.form.value);
  	}
  }

  fecharDialog() {
  	this.dialogRef.close();
  }

}
