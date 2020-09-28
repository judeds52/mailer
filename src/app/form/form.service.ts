import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  // getdata(){
  //   return  this.http.get('https://server-taskangular2.azurewebsites.net/')
            
  //        }
  //        deleteSer($event){
  //          return this.http.post('https://server-taskangular2.azurewebsites.net/',$event);
 
  //         }
  
  getdata(){
    return  this.http.get('http://localhost:5600')
            
         }
         deleteSer($event){
           return this.http.post('http://localhost:5600',$event);
 
          }
  }
