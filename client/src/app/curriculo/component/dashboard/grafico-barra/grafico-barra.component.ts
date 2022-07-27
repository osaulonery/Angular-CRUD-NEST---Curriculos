import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css'],
})
export class GraficoBarraComponent implements OnInit {
  curriculos = [];
  escolaridadeData: any[];

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.barDados();
  }

  barDados() {
    this.curriculoService.escolaridade().subscribe((res) => {
      this.escolaridadeData = res;
      this.barChartData.datasets[0].data = res.map((e) => e.value);
      this.chart.update();
    });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Bar
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {},
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
        data: [],
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
