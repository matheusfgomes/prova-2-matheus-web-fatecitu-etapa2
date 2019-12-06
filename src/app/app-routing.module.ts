import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalhe/:codigo', component: ProdutoDetalheComponent },
  { path: 'produtos', component: ProdutosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}