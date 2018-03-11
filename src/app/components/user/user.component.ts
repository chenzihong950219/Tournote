import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  info:boolean = true;
  head:boolean = false;
  safety:boolean =false;
  flag;
  nickname:string = "";
  psw:string = "";
  repsw:string = "";
  identify:string = "";
  checkIdentify:string = "";
  infoClass1:string = "hide";
  infoClass2:string = "hide";
  infoClass3:string = "hide";
  headImgUrl:string = "/tournote/image/"

  constructor(private us:UserService,private router:Router) { }

  uploader:FileUploader = new FileUploader({
    url:"/tournote/userInfoSetting.php",
    method:"POST",
    itemAlias:"uploadedfile"
  });
  

  doChange(flag,e){
    $('.aside li').removeClass("active");
    $(e.target).addClass("active");
    this.info=false;
    this.head=false;
    this.safety=false;
    flag == 1 ? this.info = true : (flag ==2 ? this.head = true : this.safety = true);
  }

  show(e){
    let that = this;
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(){
      that.headImgUrl = this.result;
    }
  }

  changeNickname(){
    this.infoClass1 = "hide";
    if(this.nickname == ""){
      this.infoClass1 = "warn";
      return;
    }
    this.us.changeNickname(this.nickname).subscribe(
      (data) => {
        let result = data.json();
        alert(result.msg1+"点击刷新页面～");
        history.go(0);
      }
    )
  }

  changeUserImg(){
    if(this.uploader.queue.length==0){
      alert("请上传头像！");
      return;
    }
    let index = this.uploader.queue.length-1;
    this.uploader.queue[index].onSuccess = (response,status,headers) => {
      if(status == 200){
        alert(JSON.parse(response).msg2+" 点击刷新页面～");
        history.go(0);
        // console.log("ok")
      }
    }
    this.uploader.queue[index].upload();
  }

  showIdentify(){
    this.identify = Math.floor(Math.random()*1000000) +""
    alert("验证码为："+this.identify);
  }

  changePassword(){
    this.infoClass1 = "hide";
    this.infoClass2 = "hide";
    this.infoClass3 = "hide";
    if(this.psw==""){
      this.infoClass1 = "warn";
      return
    }
    if(this.repsw != this.psw){
      this.infoClass2 = "warn";
      return
    }
    if(this.checkIdentify != this.identify || this.checkIdentify==""){
      this.infoClass3 = "warn";
      return
    }
    this.us.changePassword(this.psw).subscribe(
      (data) => {
        let result = data.json();
        alert(result.msg3+"请重新登录！");
        this.router.navigate(["/login"])
      }
    )
  }


  ngOnInit() {
    this.us.checkedLogin().subscribe(
      (data)=>{
        let that = this;
        let result = data.json();
        if(!result.status){
          alert("请先登录！")
          this.router.navigate(["/login"])
        }
        if(result.status){
          that.headImgUrl = that.headImgUrl + result.user.userImgUrl
        }
      }
    )
  }

}
