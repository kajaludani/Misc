import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCheckboxComponent } from './fancy-checkbox.component';

describe('FancyCheckboxComponent', () => {
  let component: FancyCheckboxComponent;
  let fixture: ComponentFixture<FancyCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
