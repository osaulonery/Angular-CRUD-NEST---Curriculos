import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CurriculoService } from 'src/app/curriculo/curriculo.service';
@Component({
  selector: 'app-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.css'],
})
export class GraficoPizzaComponent implements OnInit {
  statusData: any[];

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.curriculoService.status().subscribe((res) => {
      this.statusData = res;
      this.pieChartData.datasets[0].data = res.map((e) => e.value);
      this.chart.update();
    });
  }
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
    labels: ['Aguardando', 'Aprovado', 'Reprovado'],
    datasets: [
      {
        data: [],
        backgroundColor: ['#8288cb', '#8bcb82', '#c2cb82'],
        hoverBackgroundColor: ['#8288cb', '#8bcb82', '#c2cb82'],
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
