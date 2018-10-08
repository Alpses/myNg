import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators' ;
import {Observable , of } from 'rxjs' ;

interface Messmemberli5a {
  id:string;
  login:string;
  avatar_url:string;
  html_url:string;
  repos_url:string;
}
@Component({
  selector: 'app-mess-code',
  templateUrl: './mess-code.component.html',
  styleUrls: ['./mess-code.component.styl']
})
export class MessCodeComponent implements OnInit {
  members:Messmemberli5a[];
  constructor(private http:HttpClient) { }
  private reqUrl = `https://api.github.com/orgs/angular/members?page=1&per_page=5`;
  ngOnInit() {
    this.http.get<Messmemberli5a[]>(this.reqUrl)
    .subscribe(data=>{
      if( data) {
        this.members = data ;
        console.log(data);
      }
    });;
  }

}
