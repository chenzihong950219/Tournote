import { Component, OnInit } from '@angular/core';
import { TogetherService } from '../../services/together/together.service';

declare var $: any;

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  place:string="";
  date:string="";
  companyList:Array<any>=[];
  timeLeft:Number=0;

  constructor(public tgs:TogetherService) { }

  ngOnInit() {
    this.tgs.list(this.place,this.date).subscribe((data)=>{
      this.companyList = data.json().data; 
      console.log(data.json());
      this.update()
    });
  }

  Select(){
    this.tgs.list(this.place,this.date).subscribe((data)=>{
      this.companyList = data.json().data; 
      this.update()
    });
  }

  update(){
    for(let i =0 ; i< this.companyList.length ; i++){
      console.log(this.companyList[i])
      let now = new Date().getTime();
      let start = new Date(this.companyList[i].startDate).getTime();
      this.companyList[i]["days"] = parseInt((start-now)/1000/60/60/24+"")+1;
    }
  }
}

