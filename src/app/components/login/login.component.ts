import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info:string="";
  infoClass:string;
  registed:boolean=true;
  userTel:string;
  password:string;
  constructor(private http:Http,private us:UserService,private router:Router) { 

  }

  ngOnInit() {
  }
  switch(){
    this.registed=!this.registed
  }
  doRegist(){
    this.us.regist(this.userTel).subscribe(
      (data)=>{
        let result = data.json();
        this.info = result.msg;
        this.infoClass = result.code;
        console.log(result);
        if(result.code=="success"){
          alert("注册成功！点击确定跳转至登陆界面～")
          this.registed = !this.registed
        }
      }
    )
  }

  doLogin(){
    console.log(this.password);
    this.us.login(this.userTel,this.password).subscribe(
      (data)=>{
        let result = data.json();
        this.info = result.msg;
        this.infoClass = result.code;
        console.log(result);
        if(result.code=="success"){
          this.router.navigate(["/"])
        }
      }
    )
  }

  fresh(flag){
    if(this.info=="用户名或密码错误!"){
      this.info = ""
    }
    if(this.info=="请输入密码！"){
      if(!flag){
        this.info = ""
      }
    }else{
      if(flag){
        this.info = ""
      }
    }
    
  }

}
