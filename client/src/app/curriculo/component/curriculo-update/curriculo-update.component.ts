import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
import { Curriculo } from '../../curriculo.model';
import { CpfValidator } from '../../validators/cpf-validator';

@Component({
  selector: 'app-curriculo-update',
  templateUrl: './curriculo-update.component.html',
  styleUrls: ['./curriculo-update.component.css'],
})
export class CurriculoUpdateComponent implements OnInit {
  curriculoForm: FormGroup;
  isLinear = false;
  dataSource: MatTableDataSource<Curriculo>;
  curriculoEdit: Curriculo;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private curriculoService: CurriculoService
  ) {
    this.dataSource = new MatTableDataSource();
  }

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

  updateForm() {
    if (this.curriculoForm.valid) {
      this.curriculoService
        .editaCurriculo(this.curriculoForm.value)
        .subscribe(() => {
          this.curriculoService.mostraMsg('Currículo atualizado com sucesso');
          this.route.navigate(['/curriculos']);
        });
    }
  }

  voltarHome(): void {
    this.curriculoService.mostraMsg('Operação cancelada');
    this.route.navigate(['/home']);
  }
}
