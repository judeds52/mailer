import { graphService } from './graph.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit  {
  title = 'Angular Charts';

  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  timeline = true;
  dataLabel=true;

 public single:any=[];
  colorScheme = {
    domain: [
      '#4bbcfe','#0f6400','#810d0d','#50296a','#ff0099','#f06400','#CD5C5C',
      '#0000FF','#00BFFF','#00FFFF','#008080','#556B2F','#00FF7F','#FFDAB9',
      '#778899','','','#FFD700','#FF6347','#FF1493','#B22222','#808080','#F0F8FF',
  ]
  };
  colorSchemeBar = {
    domain: [
      '#4bbcfe'
  ]
  };

constructor(private service: graphService){
  this.graphdata();
}
 
  
ngOnInit(){

}
graphdata(){
  this.service.getdata().subscribe((result)=>{
    console.log("call is being made..");
    this.single=result;
  })
}



//for table
// rows = [
//   { name: 'Austin', value: 'Male'},
//   { name: 'Dany', value: 'Male' },
//   { name: 'Molly', value: 'Female' }
// ];
columns = [{ prop: 'name' }, { prop: 'value' }];
}