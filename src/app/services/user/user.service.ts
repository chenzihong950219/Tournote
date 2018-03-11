import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// 导入模块
import { Http,URLSearchParams } from "@angular/http";

@Injectable()
export class UserService {

  // 注入 http 对象
  constructor(private http:Http) { }

  public checkedLogin():Observable<any>{
    return this.http.get("/tournote/checkLogin.php");
  }


  public login(tel:string,password:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tel",tel);
    params.append("psw",password);
    return this.http.post("/tournote/login.php",params);
  }

  public regist(tel:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tel",tel);
    return this.http.post("/tournote/regist.php",params);
  }

  public doExit(){
    return this.http.get("/tournote/exit.php");
  }

  public changePassword(psw:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("psw",psw);
    return this.http.post("/tournote/userInfoSetting.php",params);
  }

  public changeNickname(nn:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("nn",nn);
    return this.http.post("/tournote/userInfoSetting.php",params);
  }
}