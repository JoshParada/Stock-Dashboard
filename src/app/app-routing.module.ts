import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

const routes: Routes = [
  {path:'homepage', component:HomepageComponent},
  {path:'portfoliopage', component:PortfolioComponent},
  {path:'stockpage', component:StockpageComponent},
  {path:'stockpage/:symbol', component:StockpageComponent},
  {path:'searchpage', component:SearchpageComponent},
  {path:'', redirectTo: 'homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
