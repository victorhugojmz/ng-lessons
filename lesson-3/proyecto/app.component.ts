import { Component } from '@angular/core';
import { Cliente } from '../cliente';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private clientes: Cliente[];
             info(cliente: Cliente):void  {
        console.log(cliente);
    }
    public eliminar(cliente:Cliente) : void {
        let index = this.clientes
 } 
}
