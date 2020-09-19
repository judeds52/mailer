import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor(private http:HttpClient){}

  getdata(){
  return  this.http.get('https://server-taskangular1.herokuapp.com/cancer')
      
  }
  
}
