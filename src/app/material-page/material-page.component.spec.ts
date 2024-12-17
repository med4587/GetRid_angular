import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPageComponent } from './material-page.component';

describe('MaterialPageComponent', () => {
  let component: MaterialPageComponent;
  let fixture: ComponentFixture<MaterialPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialPageComponent]
    });
    fixture = TestBed.createComponent(MaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
