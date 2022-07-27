import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
import { Curriculo } from 'src/app/curriculo/curriculo.model';
import { Router } from '@angular/router';

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
  curriculo: Curriculo;

  constructor(
    private curriculoService: CurriculoService,
    private route: Router
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

  deletaCurriculo(id: number) {
    this.curriculoService.deletaCurriculo(id).subscribe(() => {
      this.acharCurriculoCpf();
      this.curriculoService.mostraMsg('Currículo excluído');
      this.route.navigate(['/curriculo/view']);
    });
  }
}
