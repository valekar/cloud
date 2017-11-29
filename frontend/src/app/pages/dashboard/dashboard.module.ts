import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { SimpleBarChartComponent } from './components/simple-bar-chart/simple-bar-chart.component';
import { BarChartDirective } from './directives/bar-chart.directive';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    SimpleBarChartComponent,
    BarChartDirective
  ],
  providers:[]
})
export class DashboardModule { }
