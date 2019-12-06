import { Component, OnInit } from '@angular/core';
import { Produto} from '../produto';
import { Produto} from '../mock-produtos';
import {ProdutoService} from '../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  produtos: Produto[];

  getProdutos(): void{
    this.produtos = this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  onSelect(produto: Produto): void {
    this.selectedProduto = produto;
  }

  

  ngOnInit() {
    this.getProdutos();
  }

  

}