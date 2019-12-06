import { Injectable } from '@angular/core';
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

}