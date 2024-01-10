import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-score-distribution',
  standalone: true,
  imports: [ChartModule, SvgIconComponent],
  templateUrl: './score-distribution.component.html',
  styleUrl: './score-distribution.component.css',
})
export class ScoreDistributionComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit(): void {
    this.data = {
      labels: [
        '1 to 10',
        '11 to 20',
        '21 to 30',
        '31 to 40',
        '41 to 50',
        '51 to 60',
        '71 to 100',
      ],
      datasets: [
        {
          label: 'Score distribution',
          backgroundColor: '#083F88',
          borderColor: '#083F88',
          data: [60, 80],
          barThickness: 30,
        },
      ],
    };

    this.options = {
      layout: { padding: { left: -40 } },
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          border: {
            display: true,
            color: '#E0DFE4',
          },
          ticks: {
            display: true,
            font: {
              color: '#2A2B2E',
              weight: 700,
              family: 'Poppins',
            },
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 100,
          border: {
            display: false,
          },
          font: {
            weight: 400,
          },
          ticks: {
            display: true,
            stepSize: 20,
            padding: 40,
            font: {
              color: '#2A2B2E',
              weight: 700,
              family: 'Poppins',
            },
          },
          grid: {
            display: true,
          },
        },
      },
    };
  }
}
