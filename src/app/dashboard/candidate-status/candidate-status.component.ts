import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type Data = {
  label: string;
  value: number;
  color: string;
};

@Component({
  selector: 'app-candidate-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-status.component.html',
  styleUrl: './candidate-status.component.css',
})
export class CandidateStatusComponent implements OnInit {
  rawData: Data[] = [
    {
      label: 'Invited',
      value: 20,
      color: '#FF8A00',
    },
    {
      label: 'Pending',
      value: 0,
      color: '#C2DCFF',
    },
    {
      label: 'Selected',
      value: 0,
      color: '#48BB79',
    },
    {
      label: 'Rejected',
      value: 5,
      color: '#E74C3C',
    },
  ];

  graphData: any[] = [];
  totalValue = 0;

  ngOnInit(): void {
    for (const raw of this.rawData) {
      if (raw?.value <= 0) {
        continue;
      }
      this.totalValue += raw.value;
      this.graphData.push(raw);
    }
  }

  getWidth(data: Data): string {
    return (data.value / this.totalValue) * 100 + '%';
  }
  getBackgroundColor(data: Data): string {
    return data.color;
  }
}
