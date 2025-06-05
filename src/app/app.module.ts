import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { CadastroVeiculoComponent } from './components/cadastro-veiculo/cadastro-veiculo.component';
import { VeiculoCardComponent } from './components/veiculo-card/veiculo-card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    CadastroVeiculoComponent,
    VeiculoCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
