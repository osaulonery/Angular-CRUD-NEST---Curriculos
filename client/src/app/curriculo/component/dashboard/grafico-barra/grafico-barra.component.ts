import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css'],
})
export class GraficoBarraComponent implements OnInit {
  curriculos = [];
  escolaridadeData = [];

  constructor(
    private curriculoService: CurriculoService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  contador(valor: string, campo: string): number {
    const filtroCurriculo = this.curriculos.filter(
      (e: any) => e[campo] === valor
    );
    return filtroCurriculo.length;
  }

  //   this.barChartData = [
  //     {
  //       name: 'Analfabeto',
  //       value: this.contarValor('Analfabeto', 'escolaridade'),
  //     },
  //   ];
  // }

  // contarValor(valor: string, campo: string): number {
  //   const filtroCurriculo = this.curriculos.filter(
  //     (e: any) => e[campo] === valor
  //   );
  //   return filtroCurriculo.length;
  // }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Bar
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        text: 'Gráfico de Escolaridade',
        display: true,
      },
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: [
      'Analfabeto',
      'Fundamental Completo',
      'Médio Incompleto',
      'Médio Completo',
      'Superior Incompleto',
      'Superior Completo',
      'Mestrado',
      'Doutorado',
      'Ignorado',
    ],

    datasets: [
      {
        data: [2, 3, 5, 3, 2, 2, 3, 4, 9],
        backgroundColor: '#5fcfcb',
        hoverBackgroundColor: '#5fcfcb',
      },
    ],
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [ChartDataLabels];

  // events
  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {}
}
