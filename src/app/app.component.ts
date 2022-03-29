import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'operacionesmat';

 // cantidadone: number;
  cantidad1 = 0;
  cantidad2 = 0;
  resultado = 0;
  resultadoLog = 0;
  resultadoSeno = 0;
  resultadoCoseno = 0;
  resultadoTan = 0;

  product(){
  let res =  this.resultado = (this.cantidad1 * this.cantidad2);
    console.log(res);
  }

  baseLog(){
    let res2 = this.resultadoLog = (Math.log(this.cantidad2) / Math.log(this.cantidad1));
    console.log(res2)
  }

  seno(){
    let res3 = this.resultadoSeno = (Math.sin(this.cantidad1* (Math.PI/180)));
  }

  coseno(){
    let res4 = this.resultadoCoseno = (Math.cos(this.cantidad1 * (Math.PI/180)));
  }

  tangente(){
    let res5 = this.resultadoTan = (Math.tan(this.cantidad1* (Math.PI/180)));
  }

}
