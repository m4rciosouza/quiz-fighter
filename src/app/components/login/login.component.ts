import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly PRE_JOGO_PATH: string = '/pre-jogo';
  form: FormGroup;
  cadastro: boolean;

  constructor(
  	public afAuth: AngularFireAuth,
  	private router: Router,
  	private fb: FormBuilder, 
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(authState => {
      if (authState) { 
        this.router.navigate([this.PRE_JOGO_PATH]);
      }
    });
  	this.cadastro = false;
  	this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logarGoogle() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
      .then(res  => this.router.navigate([this.PRE_JOGO_PATH]))
      .catch(err => this.snackBar.open(
              'Problema ao autenticar no Google.', 
        	  'Erro', { duration: 5000 })
    );
  }

  logarEmail() {
  	if (this.form.invalid) {
      return;
    }
    const dados = this.form.value;
    this.afAuth.auth
      .signInWithEmailAndPassword(dados.email, dados.senha)
      .then(res  => this.router.navigate([this.PRE_JOGO_PATH]))
      .catch(err => this.snackBar.open(
              'Usuário/senha inválido(s)', 
        	  'Erro', { duration: 5000 })
    );
  }

  cadastrarEmail() {
  	if (this.form.invalid) {
      return;
    }
    const dados = this.form.value;
  	this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(
  	  dados.email, dados.senha)
  	  .then(res  => this.router.navigate([this.PRE_JOGO_PATH]))
  	  .catch(err => this.snackBar.open(
              'Problema ao cadastrar email.', 
        	  'Erro', { duration: 5000 })
    );
  }

  exibirCadastro() {
    this.cadastro = true;
  }

  exibirLogin() {
    this.cadastro = false;
  }

}
