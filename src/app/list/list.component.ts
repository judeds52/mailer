import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.datedata();
  }
  public single:any=[];
  datedata(){
    this.http.get('https://server-taskangular2.azurewebsites.net/').subscribe((result)=>{
      console.log("call is being made..");
      this.single=result;
      console.log("this is single",this.single);
    })
  }
  updatefn(value){
    this.router.navigate(['/update',value])
  }
  
  deletefn(value){
 
    let url = `https://server-taskangular2.azurewebsites.net/${value}`;
    console.log(value);
    this.http.delete(url).subscribe((result)=>{
      console.log("deleting on progress....");
      this.datedata();
    })
}
  

}
