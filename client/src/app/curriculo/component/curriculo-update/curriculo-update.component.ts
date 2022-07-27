import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
import { Curriculo } from '../../curriculo.model';
import { CpfValidator } from '../../validators/cpf-validator';

@Component({
  selector: 'app-curriculo-update',
  templateUrl: './curriculo-update.component.html',
  styleUrls: ['./curriculo-update.component.css'],
})
export class CurriculoUpdateComponent implements OnInit {
  isLinear = false;
  curriculoEdit: Curriculo;
  curriculoEditCpf: Curriculo[] | Curriculo;

  curriculoForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', [Validators.required, CpfValidator.cpfValido]],
    datanasc: ['', Validators.required],
    email: ['', Validators.required],
    telefone: ['', Validators.required],
    escolaridade: ['', Validators.required],
    funcao: ['', Validators.required],
    competencias: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private actRoute: ActivatedRoute,
    private curriculoService: CurriculoService
  ) {}

  ngOnInit(): void {
    this.insereDados();
  }

  insereDados() {
    const paramCpf = this.actRoute.snapshot.paramMap.get('cpf');
    this.curriculoService.lerCurriculoPorCpf(paramCpf).subscribe((res) => {
      this.curriculoForm.controls['name'].setValue(res[0].name);
      this.curriculoForm.controls['cpf'].setValue(res[0].cpf);
      this.curriculoForm.controls['datanasc'].setValue(res[0].datanasc);
      this.curriculoForm.controls['email'].setValue(res[0].email);
      this.curriculoForm.controls['telefone'].setValue(res[0].telefone);
      this.curriculoForm.controls['escolaridade'].setValue(res[0].escolaridade);
      this.curriculoForm.controls['funcao'].setValue(res[0].funcao);
      this.curriculoForm.controls['competencias'].setValue(res[0].competencias);
    });
  }

  updateForm() {
    if (this.curriculoForm.valid) {
      this.curriculoService
        .editaCurriculo(this.curriculoForm.value)
        .subscribe(() => {
          this.curriculoService.mostraMsg('Currículo atualizado com sucesso');
          this.route.navigate(['/curriculo/view']);
        });
    }
  }

  voltarHome(): void {
    this.curriculoService.mostraMsg('Operação cancelada');
    this.route.navigate(['/home']);
  }
}
