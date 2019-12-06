import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';


@Injectable({ providedIn: 'root'})
export class ProdutoService {

  constructor(private mensagemService: MensagemService) { }

  getProdutos(): Observable<Produto[]> {
    this.mensagemService.add('Listando Produtos');
    return of(PRODUTOS);
  }

  getProduto(codigo: number): Observable<Produto> {
    this.mensagemService.add('Código do Produto = ${codigo}');
    return of(PRODUTOS.find(produto => produto.codigo === codigo));
  }

}




/*import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Produto } from './mock-produtos';
import { Observable, of } from 'rxjs';
import { MensagemServie} from './mensagem.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Produto } from './produto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }
insert(produto: Produto) {
console.log(produto);
this.db.list('produtos').push(produtos)
.then((result: any) => {
console.log(result.key)
});
    
  //    getAll(){
  //   return this.db.list('produtos')
  //    .snapshotChanges()
  //  .pipe(
  //         map(changes => {
  //  return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  // })
  // );
  //   }
    
}
  getProdutos(): Produto[]{
    return  PRODUTOS;
  }

  // getProdutos(): Observable<Produto[]>{

  //     this.mensagemService.add('ProdutoService: produto selecionado');
  //     return of (PRODUTOS);
  // }
  
  */

