import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-createmeeting',
  templateUrl: './createmeeting.component.html',
  styleUrls: ['./createmeeting.component.css']
})
export class CreatemeetingComponent implements OnInit {
  topic:string='';
  noofppl:number =0;
  starttime:any;
  message:string ='';
  errormsg:string ='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  shedulemet(){
    const meet ={
      topicname:this.topic,
      numberofppl:this.noofppl,
      strtime:this.starttime
    };
    console.log(meet);

   this.http.post('http://localhost:3000/addmeet',meet)
    .subscribe((response:any)=>
    {this.message=response.message},
    (error)=>{console.error('Error adding the meet',error);}
  );

  }

}
