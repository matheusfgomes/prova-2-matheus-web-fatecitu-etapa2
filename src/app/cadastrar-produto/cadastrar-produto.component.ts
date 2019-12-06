import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  salvar(codigo: number, descricao: string, valor: number, fornecedor: string){
this.produtoService.insert({ codigo, descricao, valor, fornecedor} as Produto);
}

}