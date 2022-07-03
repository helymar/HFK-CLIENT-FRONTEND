import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioTransactionsComponent } from './porfolio-transactions.component';

describe('PorfolioTransactionsComponent', () => {
  let component: PorfolioTransactionsComponent;
  let fixture: ComponentFixture<PorfolioTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfolioTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
