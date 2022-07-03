import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDocumentationComponent } from './portfolio-documentation.component';

describe('PortfolioDocumentationComponent', () => {
  let component: PortfolioDocumentationComponent;
  let fixture: ComponentFixture<PortfolioDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
