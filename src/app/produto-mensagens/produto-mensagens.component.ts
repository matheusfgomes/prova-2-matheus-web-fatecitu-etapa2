import { Component, OnInit } from '@angular/core';
import { MensagemService} from '../mensagem.service';

@Component({
  selector: 'app-produto-mensagens',
  templateUrl: './produto-mensagens.component.html',
  styleUrls: ['./produto-mensagens.component.css']
})
export class ProdutoMensagensComponent implements OnInit {

  constructor(public mensagemService: MensagemService) { }

  ngOnInit() {
  }

}