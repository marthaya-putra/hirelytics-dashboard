import { Component, OnInit } from '@angular/core';
import {
  DropdownComponent,
  DropdownOption,
} from '../../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-hiring-companies',
  standalone: true,
  imports: [DropdownComponent, CommonModule],
  templateUrl: './top-hiring-companies.component.html',
  styleUrl: './top-hiring-companies.component.css',
})
export class TopHiringCompaniesComponent implements OnInit {
  durations: DropdownOption[] = [];
  selectedDuration?: DropdownOption;
  companies: { name: string; logo: string; siteUrl: string }[] = [];

  ngOnInit(): void {
    this.durations = [{ value: 'thisWeek', label: 'This Week' }];
    this.selectedDuration = this.durations[0];

    this.companies = [
      {
        name: 'Emirates Corporation',
        logo: 'emirates.png',
        siteUrl: 'https://emirates.com',
      },
      {
        name: 'Yahoo',
        logo: 'yahoo.png',
        siteUrl: 'https://yahoo.com',
      },
      {
        name: 'Emirates Corporation',
        logo: 'emirates.png',
        siteUrl: 'https://emirates.com',
      },
      {
        name: 'Yahoo',
        logo: 'yahoo.png',
        siteUrl: 'https://yahoo.com',
      },
    ];
  }
}
