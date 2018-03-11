import { Injectable } from '@angular/core';
import { Tour } from '../../extras/tour';
import { Http ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TournoteService {

  constructor(private http:Http){}

  findByPage(pageNo:number = 1):Observable<any>//Array<Tour>
  {
    return null;
  }

  findNoteDetailById(id:string):Observable<any>//TourDetail
  {
    let params = new URLSearchParams;
    params.append("tourid",id);
    return this.http.post("/tournote/findTournoteById.php",params)
  }

  findAll():Observable<any>{
    return this.http.get("/tournote/findAllTournote.php")
  }

  publish(tour:Tour):Observable<any>{
    let params = new URLSearchParams();
    params.append("title",tour.title);
    params.append("type",tour.type);
    params.append("content",tour.content);
    params.append("contentImg",tour.contentImg);
    return this.http.post("/tournote/submitTournote.php",params);
  }

}
