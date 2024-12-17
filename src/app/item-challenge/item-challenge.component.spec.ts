import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChallengeComponent } from './item-challenge.component';

describe('ItemChallengeComponent', () => {
  let component: ItemChallengeComponent;
  let fixture: ComponentFixture<ItemChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemChallengeComponent]
    });
    fixture = TestBed.createComponent(ItemChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
