import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.css'],
})
export class GraficoPizzaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        text: 'Gráfico de Status',
        display: true,
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Reprovado', 'Aguardando', 'Aprovado'],
    datasets: [
      {
        data: [15, 20, 7],
        backgroundColor: ['#8bcb82', '#8288cb', '#c2cb82'],
        hoverBackgroundColor: ['#8bcb82', '#8288cb', '#c2cb82'],
      },
    ],
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ChartDataLabels];

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {}
}
