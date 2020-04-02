import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'test2';
  vAnimal : string;
  srcAnimal : string;
  
  constructor(){}
  
  ngOnInit(){
    this.vAnimal="perritos";
    this.srcAnimal="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ZcQmJhRcU4LAuJ13ib5ycbB3mEPIP0osz5o1iKSlEtsE2HLY&usqp=CAU";
  }

  public enviar(event): void{
    this.vAnimal="Pipo";
  }

}
