import { Directive,Input,OnChanges } from '@angular/core';

@Directive({
  selector: '[bar-chart]'
})
export class BarChartDirective implements OnChanges{ 

  @Input('data') data:any = null;
  constructor() { }

  ngOnChanges(): void {
    if(this.data!=null){
      this.buildMyBarGraph(this.data);
    }
  }
  

  buildMyBarGraph(data:any){
    
  }


}
