import { Component, OnInit } from '@angular/core';


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