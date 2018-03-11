import { Component, OnInit } from '@angular/core';
import { TournoteService } from '../../services/tournote/tournote.service';
declare var $: any;
declare var Swiper:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tours:Array<any>;
  constructor(private ts:TournoteService) { 

  }

  findAllTour(){
    this.ts.findAll().subscribe(
      (data)=>{
        let result = data.json();
        if(result.code=="success"){
          console.log(this.tours)
          this.tours = result.tours
          console.log(this.tours)
        }
      }
    )
  }

  ngOnInit() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay:2000,
      paginationBulletRender: function (swiper, index, className) {
        return '<span " class="' + className + '">' + '<img width = 100% height=100% src="'+ `../../../assets/img/swiperImg/show0${index+1}.jpeg` +'">' + '</span>';
      }
    });	
    this.findAllTour();
  }
  


}

	



