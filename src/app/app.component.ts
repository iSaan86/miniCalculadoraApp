import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void{

    this.resultado=this.numero1+this.numero2;

  }

  restar():void{

    this.resultado=this.numero1-this.numero2;

  }

  multiplicar():void{

    this.resultado=this.numero1*this.numero2;

  }

  dividir():void{

    this.resultado=this.numero1/this.numero2;
  }

}
