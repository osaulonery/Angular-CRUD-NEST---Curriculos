import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurriculoService } from './component/curriculo.service';
import { Curriculo } from './curriculo.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css'],
})
export class CurriculoComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'cpf',
    'datanasc',
    'email',
    'telefone',
    'escolaridade',
    'funcao',
    'competencias',
  ];

  dataSource: MatTableDataSource<Curriculo>;

  curriculos: Curriculo[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private curriculoService: CurriculoService) {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
