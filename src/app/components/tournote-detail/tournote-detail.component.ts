import { Component, OnInit } from '@angular/core';
import { Tour } from '../../extras/tour';
import { CommentObj } from '../../extras/CommentObj'
import { ActivatedRoute, Router } from '@angular/router';
import { TournoteService } from '../../services/tournote/tournote.service';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-tournote-detail',
  templateUrl: './tournote-detail.component.html',
  styleUrls: ['./tournote-detail.component.css']
})
export class TournoteDetailComponent implements OnInit {
  tour:Tour = new Tour(null,"","","","","","","");
  tourid:string = "";
  comment:CommentObj = new CommentObj("","","","","");
  comments:CommentObj = new CommentObj("","","","","");
  context:string;
  constructor(private ar:ActivatedRoute,private ts:TournoteService,private cs:CommentService,private router:Router) { 
    this.tourid = this.ar.snapshot.params["tourid"]
  }

  findTournoteById(tourid){
    this.ts.findNoteDetailById(tourid).subscribe(
      (data) => {
        let result = data.json();
        console.log(result);
        if(result.code == "success"){
          this.tour = new Tour(null,result.data.title,result.data.content,result.data.contentImg,result.data.type,result.data.publishDate,result.data.nickName,"")
        }
      }
    )
  }

  addComment(){
    this.comment.tourid = this.tourid;
    this.cs.addComment(this.comment).subscribe(
      (data) => {
        let result = data.json();
        if(result.code == "error"){
          alert("请先登录！");
          this.router.navigate(["/login"]);
          return;
        }
        alert(result.msg);
        this.findCommentById(this.tourid)
      }
    )
  }

  findCommentById(tourid:string){
    this.cs.findCommentByTourid(tourid).subscribe(
      (data) => {
        let result = data.json();
        if(result.code == "success"){
          this.comments = result.comments;
          return;
        }
      }
    )
  }

  ngOnInit() {
    this.findTournoteById(this.tourid);
    this.findCommentById(this.tourid);
  }

}
