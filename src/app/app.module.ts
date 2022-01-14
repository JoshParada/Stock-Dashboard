import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { InfopaneComponent } from './infopane/infopane.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';

PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SidebarComponent,
    HomepageComponent,
    SearchpageComponent,
    StockpageComponent,
    PortfolioComponent,
    ChartComponent,
    ProfileComponent,
    NewsComponent,
    InfopaneComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
