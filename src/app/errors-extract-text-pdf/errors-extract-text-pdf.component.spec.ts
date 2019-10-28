import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsExtractTextPdfComponent } from './errors-extract-text-pdf.component';

describe('ErrorsExtractTextPdfComponent', () => {
  let component: ErrorsExtractTextPdfComponent;
  let fixture: ComponentFixture<ErrorsExtractTextPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsExtractTextPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsExtractTextPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
