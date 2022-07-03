import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PorfolioLoanComponent } from './porfolio-loan/porfolio-loan.component';
import { PortfolioDocumentationComponent } from './portfolio-documentation/portfolio-documentation.component';
import { PorfolioDetailsComponent } from './porfolio-details/porfolio-details.component';
import { PorfolioTransactionsComponent } from './porfolio-transactions/porfolio-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PorfolioLoanComponent,
    PortfolioDocumentationComponent,
    PorfolioDetailsComponent,
    PorfolioTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
