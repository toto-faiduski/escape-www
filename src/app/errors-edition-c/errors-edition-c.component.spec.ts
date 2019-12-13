import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsEditionCComponent } from './errors-edition-c.component';

describe('ErrorsEditionCComponent', () => {
  let component: ErrorsEditionCComponent;
  let fixture: ComponentFixture<ErrorsEditionCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsEditionCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsEditionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
