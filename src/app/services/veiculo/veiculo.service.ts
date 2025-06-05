import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor() {}

  getVeiculos() {
    return this.veiculos;
  }

  getVeiculoById(id: number) {
    return this.veiculos.find(veiculo => veiculo.id === id);
  }

  addVeiculo(veiculo: { marca: string; modelo: string; ano: number; placa: string }) {
    const novoVeiculo = { id: this.veiculos.length + 1, ...veiculo };
    this.veiculos.push(novoVeiculo);
  }

  updateVeiculo(id: number, veiculo: { marca: string; modelo: string; ano: number; placa: string }) {
    const index = this.veiculos.findIndex(v => v.id === id);
    if (index !== -1) {
      this.veiculos[index] = { id, ...veiculo };
    }
  }

  deleteVeiculo(id: number) {
    const index = this.veiculos.findIndex(veiculo => veiculo.id === id);
    if (index !== -1) {
      this.veiculos.splice(index, 1);
    }
  }
}
