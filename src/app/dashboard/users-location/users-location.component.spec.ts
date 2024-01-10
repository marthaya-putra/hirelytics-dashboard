import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLocationComponent } from './users-location.component';

describe('UsersLocationComponent', () => {
  let component: UsersLocationComponent;
  let fixture: ComponentFixture<UsersLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
