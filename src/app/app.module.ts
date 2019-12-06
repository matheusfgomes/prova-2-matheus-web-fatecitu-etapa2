import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto.service';
import { ProdutoMensagensComponent } from './produto-mensagens/produto-mensagens.component';
import { MensagemService } from './mensagem.service';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './environments/environment';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule ],

  declarations: [ AppComponent, HelloComponent, ProdutoComponent, ProdutoMensagensComponent, CadastrarProdutoComponent, ProdutosComponent, DashboardComponent, ProdutoDetalhesComponent ],

  bootstrap:    [ AppComponent ],

  providers: [ProdutoService, MensagemService]
})
export class AppModule { }
