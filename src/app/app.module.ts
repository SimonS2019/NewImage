import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import  * as Widgets from 'fusioncharts/fusioncharts.widgets';

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FusionChartTestComponent } from './fusionCarts/fusion-chart-test/fusion-chart-test.component';
import { GaugesComponent } from './fusionCarts/gauges/gauges.component';
import { ThermometerComponent } from './fusionCarts/thermometer/thermometer.component';

FusionChartsModule.fcRoot(FusionCharts, charts,Widgets, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FusionChartTestComponent,
    GaugesComponent,
    ThermometerComponent
  ],
  imports: [
    BrowserModule,FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
