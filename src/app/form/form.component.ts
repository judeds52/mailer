import { HttpClient } from '@angular/common/http';
import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from "@angular/router";
interface states{
  value: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public fb:FormBuilder, private service:ApiService, private service2:FormService,private http:HttpClient,private router:Router) {
      this.datedata();
      this.getspec();
      this.state123;
   }
   get address1(){
     return this.forms.get("address1")
   }
   
   get address2(){
    return this.forms.get("address2")
  }
   get city(){

    return this.forms.get('city');
  }
  get clinic_name(){
    return this.forms.get('clinic_name');

  }
  get state(){
    return this.forms.get('state');
  }
  get phone(){
    return this.forms.get('phone_no');
  }
  get email(){
    return this.forms.get('email');
  }
   get pincode(){
     return this.forms.get('pincode');
   }
   get website(){
     return this.forms.get('website');
   }
   get speciality(){
     return this.forms.get('speciality');
   }
   get all(){
     return this.forms;
   }
columns = [{ prop: 'clinic_id' }, { prop: 'clinic_name' },{ prop: 'email' }];
clinicForm: FormGroup
  ngOnInit(): void {
    this.datedata();
    this.getspec();
    this.state123;
    console.log('states =', this.state123)
   this.forms = this.fb.group({
    clinic_name: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    address1: new FormControl('',Validators.required),
    address2: new FormControl('',Validators.required),
    speciality: new FormControl('',Validators.required),
    website: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone_no: new FormControl('',[Validators.minLength(10),Validators.pattern('[0-9]{10}'),Validators.maxLength(10)]),
    pincode: new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}'),Validators.minLength(6),Validators.maxLength(6)])
   
   });
  }
  forms:FormGroup;
  abc;
  public single:any=[];
  submitted:boolean=false;
  clear(){
    this.forms.setValue({
      
      clinic_name:'',
      city:'',
      state:'',
      address1:'',
      address2:'',
      speciality:'',
      website:'',
      email:'',
      phone_no:'',
      pincode:''
  })
  this.forms.setErrors({
    Validators
  })
  }
  onSubmit(){
    
    this.submitted=true;
       
     this.http.post('https://server-taskangular2.azurewebsites.net/',this.forms.value).subscribe((result)=>{
       console.log('inserting....');
      console.log(this.forms.value);
      this.datedata();
      
    });
      
  
  }
  // onSubmit(){
    
  //   this.submitted=true;

       
  //    this.http.post('http://localhost:5600',this.forms.value).subscribe((result)=>{
  //      console.log('inserting....');
  //     console.log(this.forms.value);
  //     this.datedata();
      
  //   });
      
  
  // }

  datedata(){
    this.service2.getdata().subscribe((result)=>{
      console.log("call is being made..");
      this.single=result;
      console.log("this is single",this.single);
    })
  }
   atr;
   wantToDelete(value,value1){
     
     if(confirm("Are you sure you want to delete this clinic")){
       this.deletefn(value,value1);
     }
   }
   deleted=false;
   delValue;
   delName;
  deletefn(value,value1){
    // this.url=this.router.navigate(['http://localhost:5600/',value])
    // console.log(value);
    // this.http.post("http://localhost:5600/delete",value).subscribe((result)=>{
    //   console.log("deleting on progress....");
    //   this.datedata();
    // })
    this.deleted=true;
    this.delValue=value;
    this.delName=value1
    let url = `https://server-taskangular2.azurewebsites.net/${value}`;
    // let url = `http://localhost:5600/${value}`;
    console.log(value);
    this.http.delete(url).subscribe((result)=>{
      console.log("deleting on progress....");
      this.datedata();
    })
}

updatefn(value){
  this.router.navigate(['/update',value])
}
specs:any=[];
getspec(){
  this.http.get('http://localhost:5600/spec/abc').subscribe(result=>{
    // this.http.get('https://server-taskangular2.azurewebsites.net/spec/abc').subscribe(result=>{
      console.log("speciality call is being made");
      
console.log('result of spec',result);
  this.specs=result;

  })
}
  // deletefn(value): Observable<any> {
  //   // let url = `${this.baseUri}${appointmentId}`;
  //    return this.http
  //   .delete('http://localhost:5600/', {
  //       headers: {
  //         "content-Type": "application/json",
  //         "X-auth-header": JSON.parse(
  //           window.localStorage.getItem("value")
  //         ),
  //       },
  //     });
  // }
  state123: states[] = [
    {value: "Andhra Pradesh"},
    {value: "Arunachal Pradesh"},
    {value: "Assam"},
    {value: "Bihar"},
    {value: "Chhattisgarh"},
    {value: "Goa"},
    {value: "Gujarat"},
    {value: "Haryana"},
    {value: "Himachal Pradesh"},
    {value: "Jharkhand"},
    {value: "Karnataka"},
    {value: "Kerala"},
    {value: "Madhya Pradesh"},
    {value: "Maharashtra"},
    {value: "Manipur"},
    {value: "Meghalaya"},
    {value: "Mizoram"},
    {value: "Nagaland"},
    {value: "Odisha"},
    {value: "Punjab"},
    {value: "Rajasthan"},
    {value: "Sikkim"},
    {value: "Tamil Nadu"},
    {value: "Telangana"},
    {value: "Tripura"},
    {value: "Uttar Pradesh"},
    {value: "Uttarakhand"},
    {value: "West Bengal"},
    {value: "Andaman and Nicobar Islands"},
    {value: "Chandigard"},
    {value: "Dadra and Nagar Haveli and Daman and Diu"},
    {value: "Delhi"},
    {value: "Jammu and Kashmir"},
    {value: "Ladakh"},
    {value: "Lakshadweep"},
    {value: "Puducherry"}


  ];
}

