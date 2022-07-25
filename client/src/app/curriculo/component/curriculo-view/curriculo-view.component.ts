import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
import { Curriculo } from 'src/app/curriculo/curriculo.model';

@Component({
  selector: 'app-curriculo-view',
  templateUrl: './curriculo-view.component.html',
  styleUrls: ['./curriculo-view.component.css'],
})
export class CurriculoViewComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'cpf',
    'datanasc',
    'email',
    'telefone',
    'escolaridade',
    'funcao',
    'competencias',
    'status',
    'acao',
  ];

  dataSource: MatTableDataSource<Curriculo>;
  cpf: string;
  curriculos: Curriculo[] = [];

  constructor(
    private http: HttpClient,
    private curriculoService: CurriculoService
  ) {
    this.dataSource = new MatTableDataSource(this.curriculos);
  }

  ngOnInit(): void {}

  acharCurriculoCpf() {
    this.curriculoService
      .lerCurriculoPorCpf(this.cpf)
      .subscribe((curriculos) => {
        this.dataSource.data = curriculos;
      });
  }

  deletaCurriculo() {}
}
