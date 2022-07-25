import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
import { Curriculo } from 'src/app/curriculo/curriculo.model';
import { CpfValidator } from 'src/app/curriculo/validators/cpf-validator';

@Component({
  selector: 'app-curriculo-update',
  templateUrl: './curriculo-update.component.html',
  styleUrls: ['./curriculo-update.component.css'],
})
export class CurriculoUpdateComponent implements OnInit {
  curriculoForm: FormGroup;
  isLinear = false;
  curriculoUpdate: Curriculo;
  dataSource: MatTableDataSource<Curriculo>;
  curriculos: Curriculo[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private curriculo: CurriculoService,
    private activeRoute: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource(this.curriculos);
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.curriculo.lerCurriculoPorId(+id).subscribe((curriculoUpdate) => {
      this.curriculoUpdate = curriculoUpdate;
    });

    this.curriculoForm = this.formBuilder.group({
      name: [this.curriculoForm.value.name, Validators.required],
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
      this.curriculo.editaCurriculo(this.curriculoUpdate).subscribe(() => {
        this.curriculo.mostraMsg('Currículo atualizado com sucesso');
        this.route.navigate(['/curriculos']);
      });
    }
  }

  voltarHome(): void {
    this.curriculo.mostraMsg('Operação cancelada');
    this.route.navigate(['/home']);
  }
}
