import { Component, OnInit } from '@angular/core';
import { Prueba2Service } from '../services/prueba2.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  condicional:boolean;
  varTest: 6;
  var: string;
  comentarios;


  constructor(
    public Prueba2: Prueba2Service
  ) {
    this.condicional=true;
   }

  ngOnInit() {

    const response = this.Prueba2.llamame().subscribe(
      (data)=>{
        console.log(data);
        this.comentarios=data;

      }
    )
    console.log(response);
  }

}
