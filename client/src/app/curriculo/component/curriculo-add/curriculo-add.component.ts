import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurriculoService } from '../curriculo.service';

@Component({
  selector: 'app-curriculo-add',
  templateUrl: './curriculo-add.component.html',
  styleUrls: ['./curriculo-add.component.css'],
})
export class CurriculoAddComponent implements OnInit {
  primeiroFormGroup = this.formBuilder.group({
    umCtrl: ['', Validators.required],
  });
  segundoFormGroup = this.formBuilder.group({
    doisCtrl: ['', Validators.required],
  });
  terceiroFormGroup = this.formBuilder.group({
    tresCtrl: ['', Validators.required],
  });
  quartoFormGroup = this.formBuilder.group({
    quatroCtrl: ['', Validators.required],
  });
  quintoFormGroup = this.formBuilder.group({
    cincoCtrl: ['', Validators.required],
  });
  sextoFormGroup = this.formBuilder.group({
    seisCtrl: ['', Validators.required],
  });
  setimoFormGroup = this.formBuilder.group({
    seteCtrl: ['', Validators.required],
  });
  oitavoFormGroup = this.formBuilder.group({
    oitoCtrl: ['', Validators.required],
  });
  isLinear = false;
  selected = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private curriculo: CurriculoService
  ) {}

  ngOnInit(): void {}

  voltarHome(): void {
    this.route.navigate(['/home']);
  }

  criaCurriculo(): void {
    this.curriculo.mostraMsg('Currículo adicionado com sucesso');
  }
}
