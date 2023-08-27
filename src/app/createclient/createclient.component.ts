import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {
  cname :string ='';
  cemail: string ='';
  caddress:string = '';
  cpassword: string ='';
  message: string = '';
  erro : string ='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  addclient(){
    const client ={
      name: this.cname,
      email:this.cemail,
      address:this.caddress,
      password:this.cpassword
    };
    console.log(client);

    this.http.post('http://localhost:3000/addclients',client)
    .subscribe((response:any)=>
    {this.message=response.message},
    (error)=>{console.error('Error adding the product',error);}
  );

  }

}
