import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { CadastroVeiculoComponent } from './components/cadastro-veiculo/cadastro-veiculo.component';

const routes: Routes = [
  { path: 'veiculos', component: VeiculoComponent },
  { path: 'cadastro', component: CadastroVeiculoComponent },
  { path: '', redirectTo: '/veiculos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
