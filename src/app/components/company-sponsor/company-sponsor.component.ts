import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { Together } from '../../extras/together';
import { TogetherService } from '../../services/together/together.service';

@Component({
  selector: 'app-company-sponsor',
  templateUrl: './company-sponsor.component.html',
  styleUrls: ['./company-sponsor.component.css']
})
export class CompanySponsorComponent implements OnInit {

  together = new Together("","","","","","","","","","","",[]);
  imgUrl:string = "../../../assets/img/add.png";
  // @ViewChild("head") headImg:ElementRef;
  reader = new FileReader();
  uploader:FileUploader = new FileUploader({
    url:"/tournote/saveCompanyImg.php",
    method:"POST",
    itemAlias:"uploadedfile"
  });


  constructor(private us:UserService,private router:Router,public tgs:TogetherService) { }

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
  }

  uploadImg(callback:Function){
    if(this.uploader.queue.length==0){
      alert("请上传图");
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

  addCompany(){
    console.log(this.together)
    this.uploadImg(
      (data)=>{
        this.together.coverImg = data.imgUrl;
        this.tgs.addCompany(this.together).subscribe((data)=>{
          alert(data.json().msg);
        })
      }
    )
  }

  show(e){
    let that = this;
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(){
      that.imgUrl = this.result;
    }
  }

}
