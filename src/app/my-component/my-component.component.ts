import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  cars:string[]=[
    "/assets/img/camaro.jpg",
    "/assets/img/mazda.jpg",
    "/assets/img/supra.webp"
  ];

  jets:string[] = [
    "/assets/img/plane1.jpg",
    "/assets/img/plane2.jpg",
    "/assets/img/plane3.jpg"
  ];

  ships:string[] = [
    "/assets/img/ship1.jpg",
    "/assets/img/ship2.jpg",
    "/assets/img/ship3.jpg"
  ];


  data:string[]=this.cars;


  CarsClick():void{
    this.data=this.cars;
  }

  JetsClick():void{
    this.data=this.jets;
  }

  ShipsClick():void{
    this.data=this.ships;
  }

  
}
