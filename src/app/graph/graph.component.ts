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
  public Names:any=[];

constructor(private service: graphService,private http: HttpClient){
  this.graphdata();
  this.getNames();
  
}
public convert:any=[];
  Con_fin;
ngOnInit(){

}
 value1:any;
 value2:any;
 
sendData(value){
  this.value1=JSON.stringify(value);
  this.value2=JSON.parse(this.value1)
  this.http.post("https://server-taskangular1.herokuapp.com/cancer",this.value2).subscribe((result)=>{
    console.log(result);

  })
}
getNames(){
  this.service.getReason().subscribe((result)=>{
            this.Names=result;
            this.convert=JSON.stringify(result);
            this.Con_fin=JSON.parse(this.convert);
           
            
  })
}


graphdata(){
  this.service.getdata().subscribe((result)=>{
    console.log("call made");
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
