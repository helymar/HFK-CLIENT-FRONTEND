import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PorfolioDetailsComponent } from './porfolio-details/porfolio-details.component';
import { PortfolioDocumentationComponent } from './portfolio-documentation/portfolio-documentation.component';
import { PorfolioTransactionsComponent } from './porfolio-transactions/porfolio-transactions.component';
import { PorfolioLoanComponent } from './porfolio-loan/porfolio-loan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'Portfolio-Load',
    component: PorfolioLoanComponent,
    pathMatch: 'full'
  },
  {
    path: 'Portfolio-Load/:id/Documentation',
    component: PortfolioDocumentationComponent,
    pathMatch: 'full'
  },
  {
    path: 'Portfolio-Load/:id/Details',
    component: PorfolioDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'Portfolio-Load/:id/Details/Transactions',
    component: PorfolioTransactionsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
