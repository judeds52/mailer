import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class graphService {

    public data:any=[];

constructor(private http:HttpClient){}

getdata(){
return  this.http.get('https://server-taskangular1.azurewebsites.net/')
    
}
getReason(){
  return this.http.get('https://server-taskangular1.azurewebsites.net/reason')
}

getHead(){
 return this.http.get('https://server-taskangular1.azurewebsites.net/post') 
}


//for testing

// getdata(){
//   return  this.http.get('http://localhost:5000')
      
//   }

//   getReason(){
//     return this.http.get('http://localhost:5000/reason')
//   }


// getHead(){
//   return this.http.get('http://localhost:5000/post') 
//  }
// getmessage(){
  
//   console.log("RECIECVE", this.value1)
//   return this.value1;
// }
}















