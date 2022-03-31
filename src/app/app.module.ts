import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FusionChartTestComponent } from './fusionCarts/fusion-chart-test/fusion-chart-test.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FusionChartTestComponent
  ],
  imports: [
    BrowserModule,FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
