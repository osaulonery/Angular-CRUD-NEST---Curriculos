import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpfValidator } from '../../validators/cpf-validator';
import { CurriculoService } from '../../curriculo.service';

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
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, CpfValidator.cpfValido]],
      datanasc: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      escolaridade: ['', Validators.required],
      funcao: ['', [Validators.required, Validators.minLength(3)]],
      competencias: ['', [Validators.required, Validators.minLength(10)]],
      status: ['Aguardando', Validators.required],
    });
  }

  enviaForm() {
    if (this.curriculoForm.valid) {
      this.curriculo.criaCurriculo(this.curriculoForm.value).subscribe(() => {
        this.curriculo.mostraMsg('Currículo adicionado com sucesso');
        this.route.navigate(['/curriculo/view']);
      });
    }
  }

  voltarHome(): void {
    this.curriculo.mostraMsg('Operação cancelada');
    this.route.navigate(['/home']);
  }
}
