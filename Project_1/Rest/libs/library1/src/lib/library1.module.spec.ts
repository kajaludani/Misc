import { async, TestBed } from '@angular/core/testing';
import { Library1Module } from './library1.module';

describe('Library1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Library1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Library1Module).toBeDefined();
  });
});
