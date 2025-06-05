import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo/veiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
})
export class VeiculoComponent implements OnInit {

  veiculos: any[] = [];
  veiculoDetalhado: any = null;
  showModal: boolean = false;

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.veiculos = this.veiculoService.getVeiculos();
  }

  addVeiculo() {
    this.router.navigate(['/cadastro']);
  }

  deleteVeiculo(id: number) {
    this.veiculoService.deleteVeiculo(id);
    this.veiculos = this.veiculoService.getVeiculos();
  }

  mostrarDetalhes(id: number) {
    this.veiculoDetalhado = this.veiculoService.getVeiculoById(id);
    this.showModal = true;
  }

  fecharModal() {
    this.showModal = false;
  }
}
