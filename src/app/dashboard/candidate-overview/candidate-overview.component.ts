import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {
  DropdownComponent,
  DropdownOption,
} from '../../dropdown/dropdown.component';

@Component({
  selector: 'app-candidate-overview',
  standalone: true,
  imports: [ChartModule, DropdownComponent],
  templateUrl: './candidate-overview.component.html',
  styleUrl: './candidate-overview.component.css',
})
export class CandidateOverviewComponent implements OnInit {
  data: any;
  options: any;

  durations: DropdownOption[] = [];
  selectedDuration?: DropdownOption;

  ngOnInit(): void {
    this.data = {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          label: 'Applied for Jobs',
          backgroundColor: '#083F88',
          borderColor: '#083F88',
          borderRadius: 2.5,
          data: [12000, 17000, 22000, 25000, 23000, 21000, 17000],
        },
        {
          label: 'Registered on Portal',
          backgroundColor: '#48BB79',
          borderColor: '#48BB79',
        },
      ],
    };

    this.options = {
      indexAxis: 'y',
      layout: { padding: { top: 24 } },
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
            display: false,
          },
          ticks: {
            color: '#7B91B0',
            font: {
              weight: 400,
            },
            callback: function (value: number) {
              if (value < 1000) {
                return value;
              }
              return `${value / 1000}k`;
            },
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
            align: 'end',
            color: '#7B91B0',
          },
          grid: {
            display: false,
          },
        },
      },
    };

    this.durations = [{ value: 'weekly', label: 'Weekly' }];
    this.selectedDuration = this.durations[0];
  }
}
