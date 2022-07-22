import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpfValidator } from '../../validators/cpf-validator';
import { CurriculoService } from '../curriculo.service';

@Component({
  selector: 'app-curriculo-add',
  templateUrl: './curriculo-add.component.html',
  styleUrls: ['./curriculo-add.component.css'],
})
export class CurriculoAddComponent implements OnInit {
  curriculoForm: FormGroup;
  isLinear = false;
  selected = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private curriculo: CurriculoService
  ) {}

  ngOnInit(): void {
    this.curriculoForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, CpfValidator.cpfValido]],
      datanasc: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      escolaridade: ['', Validators.required],
      funcao: ['', Validators.required],
      competencias: ['', Validators.required],
      status: ['Aguardando', Validators.required],
    });
  }

  enviaForm() {
    if (this.curriculoForm.valid) {
      this.curriculo.criaCurriculo(this.curriculoForm.value).subscribe(() => {
        this.curriculo.mostraMsg('Currículo adicionado com sucesso');
        this.route.navigate(['/curriculos']);
      });
      console.log(this.curriculoForm.value);
    }
  }

  voltarHome(): void {
    this.curriculo.mostraMsg('Operação cancelada');
    this.route.navigate(['/home']);
  }
}
