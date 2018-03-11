import { Injectable } from '@angular/core';
import {CommentObj} from "../../extras/commentObj"
import { Observable } from 'rxjs/Observable';
import { Http,URLSearchParams } from '@angular/http';
@Injectable()
export class CommentService {

  constructor(private http:Http) { }


  public addComment(comment:CommentObj):Observable<any>
  {
    let params = new URLSearchParams();
    params.append("content",comment.content);
    params.append("tourid",comment.tourid);
    return this.http.post("/tournote/addComment.php",params);
  }

  public findCommentByTourid(tourid:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tourid",tourid);
    return this.http.post("/tournote/findCommentById.php",params);
  }
  

}
