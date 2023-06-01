import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLocationComponent } from './error-location.component';

describe('ErrorLocationComponent', () => {
  let component: ErrorLocationComponent;
  let fixture: ComponentFixture<ErrorLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
