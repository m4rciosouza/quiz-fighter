import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

import { JogadorStrategy } from './jogador-strategy';
import { Jogo, DadosJogador, Pergunta } from '../../models';
import { PerguntasService } from '../perguntas.service';

@Injectable({
  providedIn: 'root'
})
export class Jogador2StrategyService extends JogadorStrategy {

  readonly JOGADOR_1 = 0;
  readonly NENHUMA_OPCAO_SEL = -1;
  readonly QUESTAO_INICIAL_POS = 0;
  readonly NUM_QUESTOES_JOGO = 20;

  constructor(
  	private perguntasService: PerguntasService,
  	afs: AngularFirestore,
  	router: Router,
  	snackBar: MatSnackBar) { 
  	super(afs, router, snackBar);
  }

  executar(jogo: Jogo, dadosJogador: DadosJogador) {
  	this.perguntasService.obterPerguntas()
      .subscribe(perguntas => {
          jogo = this.popularDadosJogo(jogo, dadosJogador, perguntas);
          super.atualizarDadosJogoFirebase(jogo);
        },
        err => this.snackBar.open(
          'Erro ao iniciar o jogo, tente novamente.', 
          'Erro', this.SNACKBAR_DURATION)
      );
  }

  popularDadosJogo(jogo: Jogo, dadosJogador: DadosJogador, 
  		perguntas: Pergunta[]): Jogo {
    jogo.dataAtualizacao = new Date().getTime();
    //caso jogador1 seja o mesmo da seleção vai para a espera do adversário
    if (jogo.jogador1.nome == dadosJogador.nome) {
      jogo.jogador1.personagem = dadosJogador.personagem;
      return jogo;
    }
    jogo.jogador2 = dadosJogador;
    jogo = this.definirDadosPadraoJogo(jogo);
    jogo = this.popularQuestoes(jogo, perguntas);
    jogo.qtdJogadores++;
    return jogo;
  }

  definirDadosPadraoJogo(jogo: Jogo): Jogo {
    jogo.vezJogar = this.JOGADOR_1;
    jogo.placar = {
      jogador1: { acertos: 0 }, 
      jogador2: { acertos: 0 }
    };
    jogo.questaoNum = this.QUESTAO_INICIAL_POS;
    jogo.questaoSel = this.NENHUMA_OPCAO_SEL;
    return jogo;
  }

  popularQuestoes(jogo: Jogo, perguntas: Pergunta[]): Jogo {
    jogo.questoes = [];
    const questoesPos: Array<number> = [];
    while (jogo.questoes.length < this.NUM_QUESTOES_JOGO) {
      const posicao = this.obterNumeroAleatorio(perguntas.length);
      if (questoesPos.indexOf(posicao) == -1) {
        questoesPos.push(posicao);
        jogo.questoes.push(perguntas[posicao]);
      }
    }
    return jogo;
  }

  obterNumeroAleatorio(max: number) {
    return Math.floor(Math.random() * max);
  }

}
