import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { 
    this.isLoading=true;
  }

  ngOnInit(): void {

    this.datedata();
  }
  isLoading=false
  public single:any=[];
  datedata(){
    this.http.get('https://server-taskangular2.azurewebsites.net/').subscribe((result)=>{
      // this.http.get('http://localhost:5600/').subscribe((result)=>{  
    console.log("call is being made..");
      this.single=result;
      console.log("this is single",this.single);
     this.isLoading=false; 
    })
  }
  updatefn(value){
    this.router.navigate(['/update',value])
  }
  
  deleted=false;
  delValue;
  delName;
  wantToDelete(value,value1){
     
    if(confirm("Are you sure you want to delete this clinic")){
      this.deletefn(value,value1);
    }
  }
  
  deletefn(value,value1){
    this.deleted=true;
    this.delValue=value;
    this.delName=value1;
    let url = `https://server-taskangular2.azurewebsites.net/${value}`;
    // let url = `http://localhost:5600/${value}`;
    console.log(value);
    this.http.delete(url).subscribe((result)=>{
      console.log("deleting on progress....");
      this.datedata();
    })
}
  

}
