import { Component } from '@angular/core';
import { GetRidServiceService } from '../get-rid-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  service=new GetRidServiceService();
  firstCarousel:string[]=[];
  secondCarousel:string[]=[];
  constructor(){
    this.service.getFirstCarousel$().subscribe((first : string[])=>{
        this.firstCarousel=first
    })
    this.service.getSecondCarousel$().subscribe((second : string[])=>{
      this.secondCarousel=second
  })
  }
}
