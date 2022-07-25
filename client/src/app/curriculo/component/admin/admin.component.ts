import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurriculoService } from '../../curriculo.service';
import { Curriculo } from '../../curriculo.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
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
  curriculo: Curriculo;
  curriculos: Curriculo[] = [];
  status: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private curriculoService: CurriculoService,
    private route: Router
  ) {
    this.dataSource = new MatTableDataSource(this.curriculos);
  }

  ngOnInit(): void {
    this.curriculoService.lerCurriculo().subscribe((curriculos) => {
      this.curriculos = curriculos;
      this.dataSource.data = this.curriculos;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  aprovado(status: Curriculo) {
    console.log('aprovado');
  }

  reprovado() {
    console.log('reprovado');
  }

  deletar() {
    this.curriculoService.deletaCurriculo(this.curriculo.id).subscribe(() => {
      this.curriculoService.mostraMsg('Currículo excluído');
      this.route.navigate(['/curriculo/admin']);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
