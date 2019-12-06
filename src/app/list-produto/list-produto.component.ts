import { Component, OnInit } from '@angular/core';
import { Produto} from '../produto';
import { Produto} from '../produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPordutos()
  {
    this.produtoService.getAll().
    subscribe(alunos => 
               this.alunos = alunos
    );
  }

}