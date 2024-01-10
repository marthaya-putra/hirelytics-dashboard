import { Component } from '@angular/core';
import { CandidateOverviewComponent } from './candidate-overview/candidate-overview.component';
import { UsersLocationComponent } from './users-location/users-location.component';
import { CandidateStatisticsComponent } from './candidate-statistics/candidate-statistics.component';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component';
import { ScoreDistributionComponent } from './score-distribution/score-distribution.component';
import { TopHiringCompaniesComponent } from './top-hiring-companies/top-hiring-companies.component';
import { CompaniesHiringStatisticsComponent } from './companies-hiring-statistics/companies-hiring-statistics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CandidateOverviewComponent,
    UsersLocationComponent,
    CandidateStatisticsComponent,
    CandidateStatusComponent,
    ScoreDistributionComponent,
    TopHiringCompaniesComponent,
    CompaniesHiringStatisticsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
