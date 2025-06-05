import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private veiculos = [
    { id: 1, marca: 'Porsche', modelo: 'GT3 RS', ano: 2024, placa: 'TET-0001' },
    { id: 2, marca: 'McLaren', modelo: 'P1', ano: 2025, placa: 'GUS-1649' },
    { id: 3, marca: 'Mercedes', modelo: 'G63', ano: 2022, placa: 'BMW-1234' }
  ];

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
