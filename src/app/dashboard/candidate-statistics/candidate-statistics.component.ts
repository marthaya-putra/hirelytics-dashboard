import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ChartModule } from 'primeng/chart';
import { DateRangeComponent } from '../../date-range/date-range.component';

@Component({
  selector: 'app-candidate-statistics',
  standalone: true,
  imports: [ChartModule, SvgIconComponent, DateRangeComponent],
  templateUrl: './candidate-statistics.component.html',
  styleUrl: './candidate-statistics.component.css',
})
export class CandidateStatisticsComponent implements OnInit {
  data: any;
  options: any;
  ranges: Date[] = [new Date(), new Date()];

  ngOnInit(): void {
    this.data = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Candidates',
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderRadius: 2.5,
          data: [12000, 17000, 22000, 25000, 23000, 21000, 17000],
          barThickness: 14,
        },
      ],
    };

    this.options = {
      layout: { padding: 0 },
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
            color: '#fff',
          },
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          border: {
            display: false,
          },
          font: {
            weight: 400,
          },
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
    };
  }
}
