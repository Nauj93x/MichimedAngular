import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lines-chart',
  templateUrl: './lines-chart.component.html',
  styleUrls: ['./lines-chart.component.css']
})
export class LinesChartComponent implements OnChanges {
  @Input() labels: string[] = [];
  @Input() dataValues: number[] = [];
  data: any;
  options: any;

  constructor() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      plugins: {
        legend: {
          display: false, // Oculta la leyenda
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColor
          }
        },
        y: {
          ticks: {
            color: textColor
          }
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['labels'] || changes['dataValues']) {
      this.updateChartData();
    }
  }

  updateChartData() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          data: this.dataValues,
          fill: false,
          borderColor: '#7FA1C3',
          tension: 0.4
        }
      ]
    };
  }
}
