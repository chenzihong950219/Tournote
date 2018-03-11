import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TogetherService } from '../../services/together/together.service';

declare var $: any;

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  cid:string="";
  detail:Array<any>=[];
  pNum:string;
  mNum:string;
  fNum:string;
  tel:string;
  flag:boolean = true;
  joins:Array<any>=[];

  constructor(public activatedRoute:ActivatedRoute , public tgs:TogetherService , public router:Router) { 
    this.cid = this.activatedRoute.snapshot.params["cid"];
  }

  findCompanyById(cid:string){
    this.tgs.findCompanyById(cid).subscribe((data)=>{
      this.detail = data.json().data;
      $(".top")[0].style.backgroundImage="url(/tournote/image/"+ this.detail["coverImg"]+")"
    })
  };
  
  addJoin(){
    if(this.joins.length == this.detail["limitNum"]){
      alert("人数已达上限");
      return;
    }
    this.join(this.cid);
  }

  join(cid:string){
    this.tgs.addJoin(cid).subscribe((data)=>{
      let result = data.json();
      if(result.code == "login"){
        alert("请先登录");
        this.router.navigate(["/login"]);
        return
      };
      if(result.code == "error"){
        alert(result.msg);
        return;
      }
      this.findJoin(cid);
    })
  }

  findJoin(cid:string){
    this.tgs.findjoinById(cid).subscribe((data)=>{
      this.joins = data.json().data;
    })
  }

  check(){
    (this.pNum <= this.detail["limitNum"])  && (Number(this.fNum) >= 0) && (Number(this.mNum) >= 0) && (Number(this.mNum) + Number(this.fNum) == Number(this.pNum)) ? this.flag = false : this.flag = true;
  }

  ngOnInit() {
    console.log(this.cid);
    this.findCompanyById(this.cid);
    this.findJoin(this.cid);
  }

}
