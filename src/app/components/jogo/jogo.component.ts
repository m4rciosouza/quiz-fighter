import { 
  Component, AfterViewInit, OnInit, OnDestroy, HostListener
} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';

import { JogoService } from '../../services';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements AfterViewInit, 
    OnInit, OnDestroy {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private jogoService: JogoService) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(authState => {
      if (!authState) { 
        this.router.navigate(['/']);
      }
    });
    const jogoId = this.route.snapshot.paramMap.get('id');
    this.jogoService.iniciarRecursos(jogoId);
  }

  ngAfterViewInit() {
    this.jogoService.iniciarJogo();
  }

  ngOnDestroy() {
    this.jogoService.restaurarJogo();
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeunload(event) {
    this.jogoService.restaurarJogo();
  }

  selecionarOpcao(opcaoNum: number) {
  	this.jogoService.jogo.questaoSel = opcaoNum;
  }

  confirmar(event: any) {
  	event.preventDefault();
  	this.jogoService.confirmar();
  }

  fecharPopup() {
  	this.jogoService.mostrarPopup = false;
  }

  novoJogo() {
    this.jogoService.restaurarJogo()
      .then(res => location.href='/pre-jogo');
  }

  selecionado(index: number) {
  	return index == this.jogoService.jogo.questaoSel;
  }

  get questaoSel() {
    if (!this.jogoService.jogo) {
      return -1;
    }
    return this.jogoService.jogo.questaoSel;
  }

  get perguntaAtual() {
    return this.jogoService.perguntaAtual;
  }

  get jogo() {
    return this.jogoService.jogo;
  }

  get msgPopup() {
    return this.jogoService.msgPopup;
  }

  get aguardandoOponente() {
    return this.jogoService.aguardandoOponente;
  }

  get mostrarPopup() {
    return this.jogoService.mostrarPopup;
  }

  get aguardarJogadaAdversario() {
    return this.jogoService.aguardarJogadaAdversario();
  }

  get fimJogo() {
    return this.jogoService.fimJogo;
  }

  sair() {
    this.afAuth.auth.signOut();
  }

}
