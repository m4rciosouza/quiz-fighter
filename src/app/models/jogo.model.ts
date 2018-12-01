import { Pergunta, DadosJogador } from './';

export interface Jogo {
	qtdJogadores: number;
	vezJogar?: number;
	placar?: {
	  jogador1: { acertos: number }, 
	  jogador2: { acertos: number }
	};
	questoes?: Pergunta[];
	questaoNum?: number;
	questaoSel?: number;
	questaoCorreta?: boolean;
	dataAtualizacao?: number;
	jogador1?: DadosJogador;
	jogador2?: DadosJogador;
  	id?: string;
}
