import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioLoanComponent } from './porfolio-loan.component';

describe('PorfolioLoanComponent', () => {
  let component: PorfolioLoanComponent;
  let fixture: ComponentFixture<PorfolioLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfolioLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
