import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChallengesComponent } from './list-challenges.component';

describe('ListChallengesComponent', () => {
  let component: ListChallengesComponent;
  let fixture: ComponentFixture<ListChallengesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChallengesComponent]
    });
    fixture = TestBed.createComponent(ListChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
