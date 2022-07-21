import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
    'actionadm',
  ];

  dataSource: MatTableDataSource<Curriculo>;
  constructor() {}

  ngOnInit(): void {}

  acharCurriculoCpf() {}
}
