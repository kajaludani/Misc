import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomComponentComponent } from './atom-component.component';

describe('AtomComponentComponent', () => {
  let component: AtomComponentComponent;
  let fixture: ComponentFixture<AtomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
