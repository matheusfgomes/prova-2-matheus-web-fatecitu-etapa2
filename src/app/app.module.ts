import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ProdutoService } from './produto.service';



//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './environments/environment';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';



import { ListProdutoComponent } from './list-produto/list-produto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule ],

  declarations: [ AppComponent, HelloComponent,  CadastrarProdutoComponent,   ListProdutoComponent ],

  bootstrap:    [ AppComponent ],

  providers: [ProdutoService]
})
export class AppModule { }
