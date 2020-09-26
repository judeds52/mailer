import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    createClinic(data){
      this.http.post('https://server-taskangular2.azurewebsites.net/',data).subscribe((result)=>{
        console.log(result);
      })
    }
}
