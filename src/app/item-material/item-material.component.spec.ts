import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaterialComponent } from './item-material.component';

describe('ItemMaterialComponent', () => {
  let component: ItemMaterialComponent;
  let fixture: ComponentFixture<ItemMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMaterialComponent]
    });
    fixture = TestBed.createComponent(ItemMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
