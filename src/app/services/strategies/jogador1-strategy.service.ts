import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { JogadorStrategy } from './jogador-strategy';
import { Jogo, DadosJogador } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class Jogador1StrategyService extends JogadorStrategy {

  constructor(
  	afs: AngularFirestore,
  	router: Router,
    snackBar: MatSnackBar) { 
  	super(afs, router, snackBar);
  }

  executar(jogo: Jogo, dadosJogador: DadosJogador) {
  	jogo.dataAtualizacao = new Date().getTime();
    jogo.jogador1 = dadosJogador;
    jogo.qtdJogadores++;
   	super.atualizarDadosJogoFirebase(jogo);
  }

}
