import { Injectable } from '@angular/core';
import { Together } from '../../extras/together';
import { Observable } from 'rxjs/Observable';
import { Http,URLSearchParams } from '@angular/http';

@Injectable()
export class TogetherService {

  constructor(public http:Http) { }

  public addCompany(together:Together):Observable<any>{
    let params =new URLSearchParams();
    params.append("title",together.title);
    params.append("tel",together.tel);
    params.append("qq",together.qq);
    params.append("weixin",together.weixin);
    params.append("toCity",together.to);
    params.append("fromCity",together.from);
    params.append("startDate",together.startDate);
    params.append("lastDays",together.lastDays);
    params.append("limitNum",together.limitNum);
    params.append("intro",together.intro);
    params.append("coverImg",together.coverImg);
    return this.http.post("/tournote/addCompany.php",params);
  }

  public list(place:string,date:string):Observable<any> 
  {
    let params =new URLSearchParams();
    params.append("place",place);
    params.append("date",date);
    return this.http.post("/tournote/findCompany.php",params);
    
  }

  public findCompanyById(id:string):Observable<any>
  {
    let params =new URLSearchParams();
    params.append("cid",id);
    return this.http.post("/tournote/findCompanyById.php",params);
  }

  public addJoin(id:string):Observable<any>
  {
    let params =new URLSearchParams();
    params.append("cid",id);
    return this.http.post("/tournote/addJoin.php",params);
  }

  public findjoinById(id:string):Observable<any>
  {
    let params =new URLSearchParams();
    params.append("cid",id);
    return this.http.post("/tournote/findJoinById.php",params);
  }

}
