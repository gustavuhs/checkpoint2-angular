import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-veiculo-card',
  templateUrl: './veiculo-card.component.html',
  styleUrls: ['./veiculo-card.component.css']
})
export class VeiculoCardComponent {
  @Input() veiculo: any;
  @Output() remove = new EventEmitter<number>();
  @Output() detalhes = new EventEmitter<number>();

  removeVeiculo() {
    this.remove.emit(this.veiculo.id);
  }

  mostrarDetalhes() {
    this.detalhes.emit(this.veiculo.id);
  }
}
