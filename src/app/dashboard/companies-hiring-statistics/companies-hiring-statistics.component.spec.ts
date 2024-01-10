import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesHiringStatisticsComponent } from './companies-hiring-statistics.component';

describe('CompaniesHiringStatisticsComponent', () => {
  let component: CompaniesHiringStatisticsComponent;
  let fixture: ComponentFixture<CompaniesHiringStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniesHiringStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniesHiringStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
