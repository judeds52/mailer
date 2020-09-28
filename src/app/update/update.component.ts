import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(public fb: FormBuilder,private http:HttpClient,private router:ActivatedRoute,private router1:Router) {
    this.isLoading= true  
   }
id;
isLoading=false
  ngOnInit(): void {
   this.id= this.router.snapshot.paramMap.get('id');
      this.getData(this.id);
      this.getspec();
    this.forms = this.fb.group({
      clinic_id:new FormControl(''), 
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
    })    
  }
  public single:any=[];
  forms: FormGroup;
  getData(id){
     
    console.log('this',id)
   let url = `https://server-taskangular2.azurewebsites.net/${id}`;
  // let url = `http://localhost:5600/${id}`;
   console.log(id);
   this.http.get(url).subscribe((result)=>{
     console.log("getting data.....");
     console.log(result);
     this.single=result;
    this.forms.setValue({
        clinic_id: this.single[0].clinic_id,
        clinic_name:this.single[0].clinic_name,
        city: this.single[0].city,
        state:this.single[0].state,
        address1:this.single[0].address1,
        address2:this.single[0].address2,
        speciality:this.single[0].speciality,
        website:this.single[0].website,
        email:this.single[0].email,
        phone_no:this.single[0].phone_no,
        pincode:this.single[0].pincode,
    
      })
      this.isLoading=false;
    //  this.a1=this.single[0].clinic_name;
    // this.a2=this.single[0].city;
    // this.a3=this.single[0].state;
    // this.a4=this.single[0].address1;
    // this.a5=this.single[0].address2;
    // this.a6=this.single[0].speciality;
    // this.a7=this.single[0].website;
    // this.a8=this.single[0].email;
    // this.a9=this.single[0].phone_no;
    // this.a10=this.single[0].pincode;
    //  console.log('a1111',this.a1);
    // console.log('this is single',this.single)
    // this.convert=JSON.stringify(result);
    //         this.Con_fin=JSON.parse(this.convert);
    //       console.log("console",this.Con_fin);
   
      
   });
   
  //  this.submit=this.forms.value;
  //  console.log('submittitii',this.submit)
  // this.onSubmit(id);
       
        // })

   
  }
  tb;
  ta; 
specs:any=[];
getspec(){
  // this.http.get('http://localhost:5600/spec/abc').subscribe(result=>{
    this.http.get('https://server-taskangular2.azurewebsites.net/spec/abc').subscribe(result=>{
      console.log("speciality call is being made");
      
this.specs=result;
console.log('this is spec',this.specs)

  })
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
  submit:any=[];
  onSubmit(){
    
     console.log('onSUbmit id',this.forms.get('speciality').value);
     
    let url = 'https://server-taskangular2.azurewebsites.net/update';
    // let url = 'http://localhost:5600/update';
      this.http.post(url,this.forms.value).subscribe((result)=>{
          console.log('Updating in progress....')
          
  })
    
   }
   selectedValue:string;
     convert;
  Con_fin;

  a1;
  a2;
  a3;
  a4;
  a5;
  a6;
  a7;
  a8;
  a9;
  a10;
}