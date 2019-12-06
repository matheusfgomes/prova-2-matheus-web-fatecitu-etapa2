import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(){
    this.produtoService.getAll().subscribe(produtos => this.produtos = produtos);
  }

}