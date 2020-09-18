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
return  this.http.get('https://server-taskangular1.herokuapp.com')
    
}


}














