import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { UEditorComponent } from '_ngx-ueditor@1.0.7@ngx-ueditor';
import { Tour } from '../../extras/tour';
import { TournoteService } from '../../services/tournote/tournote.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-tournote-submit',
  templateUrl: './tournote-submit.component.html',
  styleUrls: ['./tournote-submit.component.css']
})
export class TournoteSubmitComponent implements OnInit {
  infoClass1:string = "hide";
  infoClass2:string = "hide";
  infoClass3:string = "hide";
  imgUrl:string = "../../../assets/img/page_default.jpg";
  content:string;
  @ViewChild("tourImg") tourImg:ElementRef;
  @ViewChild("ueditor") ue:UEditorComponent;
  tour:Tour = new Tour(null,"","","","","","","");
  
  constructor(private ts:TournoteService,private router:Router,private us:UserService) { }

  uploader:FileUploader = new FileUploader({
    url:"/tournote/saveImg.php",
    method:"POST",
    itemAlias:"uploadedfile"
  });

  ngOnInit() {
    this.us.checkedLogin().subscribe(
      (data)=>{
        let result = data.json();
        if(!result.status){
          alert("请先登录！")
          this.router.navigate(["/login"])
        }
      }
    )
    this.tourImg.nativeElement.style.backgroundImage = "url("+this.imgUrl+")";
  }

  show(e){
    let that = this;
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(){
      that.tourImg.nativeElement.style.backgroundImage = "url("+this.result+")";
    }
  }

  uploadImg(callback:Function){
    if(this.uploader.queue.length==0){
      alert("请上传游记头图");
      return;
    }
    let index = this.uploader.queue.length-1;
    this.uploader.queue[index].onSuccess = (response,status,headers) => {
      if(status == 200){
        callback(JSON.parse(response))
      }
    }
    this.uploader.queue[index].upload();
  }


  doUpload(){
    this.infoClass1 = "hide";
    this.infoClass2 = "hide";
    this.infoClass3 = "hide";
    this.tour.content = this.ue.Instance.getContent();
    if(this.tour.title==""){
      this.infoClass1 = "warn";
      return
    }
    if(this.tour.type==""){
      this.infoClass2 = "warn";
      return
    }
    if(this.tour.content==""){
      this.infoClass3 = "warn";
      return
    }
    this.uploadImg(
      (data)=>{
        this.tour.contentImg = data.imgUrl;
        this.ts.publish(this.tour).subscribe((data)=>{
          let result = data.json();
          if(result.code=="success"){
            alert("提交成功！")
          }else if(result.msg=="请先登录！"){
            alert(result.msg);
            this.router.navigate(["/login"])
          }
        })
      }
    )
  }

  

  

}
