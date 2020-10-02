import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.scss']
})
export class MedsComponent implements OnInit {

  constructor(private http: HttpClient,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.getMedList();
    this.forms=this.fb.group({
      medList: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email])
    })
    
  }
list:any=[];
qtn:any=[];
forms:FormGroup;
get email(){
  return this.forms.get('email');
}
getMedList(){
  this.http.get('https://server-taskangular1.herokuapp.com//meds').subscribe(result=>{
    console.log(result);
    this.list=result;
  });
}
onAdd(){
  this.http.put('https://server-taskangular1.herokuapp.com/meds/add',this.forms.value).subscribe(result=>{
        console.log(result);
        this.qtn=result;
  }) 
  console.log(this.forms.get('medList').value)  
}
 abc;
onRemove(){
  this.http.put('https://server-taskangular1.herokuapp.com/meds/remove',this.forms.value).subscribe(result=>{
    this.qtn=result;
    
     })
}
sendEmail(){
  this.http.post('https://server-taskangular1.herokuapp.com/meds/email',this.forms.value).subscribe(result=>{
        console.log(result)
  })
}
show(){
  this.http.put('https://server-taskangular1.herokuapp.com/meds/show',this.forms.value).subscribe(result=>{
    this.qtn=result;
    
     })
}


}
