import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user;
  userStatus;

  constructor(private us:UserService,private router:Router) { }

  ngOnChanges(){
    console.log(this.userStatus)
  }

  ngOnInit() {
    this.us.checkedLogin().subscribe(
      (data)=>{ 
        let result = data.json();
        // console.log(result)
        this.userStatus = result.status;
        if(result.status){
          this.user = result.user;
          return;
        }
        this.user ={}
      }
    )
  }
  
  addUrl(url){
    if(url === undefined){
      return ""
    }
    return "http://localhost/tournote/image/"+url;
  }

  exit(){
    this.us.doExit().subscribe((data)=>{});
    history.go(0);
  }
}
