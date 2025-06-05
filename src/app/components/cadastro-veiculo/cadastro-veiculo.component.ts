import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VeiculoService } from '../../services/veiculo/veiculo.service';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css'],
})
export class CadastroVeiculoComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService
  ) {
    this.cadastroForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      placa: ['', [Validators.required, Validators.pattern('^[A-Z]{3}-[0-9]{4}$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.veiculoService.addVeiculo(this.cadastroForm.value);
      this.cadastroForm.reset();
    } else {
      console.log("Formulário inválido");
    }
  }
}
