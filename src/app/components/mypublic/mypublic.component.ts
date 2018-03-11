import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-mypublic',
  templateUrl: './mypublic.component.html',
  styleUrls: ['./mypublic.component.css']
})
export class MypublicComponent implements OnInit {
  isTournote:boolean = true;
  isCompany:boolean = false;
  doChange(flag,e){
    $('.aside li').removeClass("active");
    $(e.target).addClass("active");
    this.isTournote=false;
    this.isCompany=false;
    flag == 1 ? this.isTournote = true : this.isCompany = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
