import { async, TestBed } from '@angular/core/testing';
import { TypeaheadModule } from './typeahead.module';

describe('TypeaheadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TypeaheadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TypeaheadModule).toBeDefined();
  });
});
