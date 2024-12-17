import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDashboardComponent } from './challenge-dashboard.component';

describe('ChallengeDashboardComponent', () => {
  let component: ChallengeDashboardComponent;
  let fixture: ComponentFixture<ChallengeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeDashboardComponent]
    });
    fixture = TestBed.createComponent(ChallengeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
