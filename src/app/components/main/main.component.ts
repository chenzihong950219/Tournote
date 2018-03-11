import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user:Object = {};
  userStatus:boolean;
  constructor(private us:UserService) { 

  }

  ngOnInit() {
    this.us.checkedLogin().subscribe(
      (data)=>{
        let result = data.json();
        this.userStatus = result.status;
        if(result.status){
          this.user = result.user;
          return;
        }
        this.user ={}
      }
    )
  }

}
