import { Component, OnInit } from '@angular/core';
import {BarService} from '../../services/bar.service';

@Component({
  selector: 'simple-bar-chart',
  templateUrl: './simple-bar-chart.component.html',
  styleUrls: ['./simple-bar-chart.component.scss'],
  providers:[BarService]
})
export class SimpleBarChartComponent implements OnInit {

  data:any;
  constructor(private barService:BarService) { }

  ngOnInit() {

    this.barService.getRandomSentence().subscribe((res:any)=>{
      console.log(res);
    });

  }

}
