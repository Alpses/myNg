import { Component, OnInit } from '@angular/core';

interface Address {
  compangId : string ;
  addre:string ;
  staffTotal: number;
  responsorHr: any ; 
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl']
})
export class UsersComponent implements OnInit {
  name:string;
  desc:Address;

  constructor() {
    this.name = 'SinoDynamic Co. Ltd';
    this.desc = {
      compangId : '02013897767895' ,
      addre:'No.18 TianHe District Guangzhou City',
      staffTotal: 30 ,
      responsorHr : 'jasmine.Liu'
    }
  }

  addSkill(skill:string,ski:any){
    console.log(ski);
    let skillstr = skill.trim();
    console.log(skill,skillstr);
  }

  ngOnInit() {
  }

}
