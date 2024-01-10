import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DateRangeComponent } from '../../date-range/date-range.component';

@Component({
  selector: 'app-companies-hiring-statistics',
  standalone: true,
  imports: [ChartModule, DateRangeComponent],
  templateUrl: './companies-hiring-statistics.component.html',
  styleUrl: './companies-hiring-statistics.component.css',
})
export class CompaniesHiringStatisticsComponent {
  data = {
    labels: ['New Companies', 'Old Companies'],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ['#083F88', '#48BB79'],
      },
    ],
  };
  options = {
    aspectratio: 1,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: 'transparent',
      },
    },
  };

  range = [new Date(), new Date()];
}
