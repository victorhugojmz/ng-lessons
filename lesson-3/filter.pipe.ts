/* 
        Antes de probar esto en tu aplicacion 
        no olvides ejecutar el comando 
         > ng generate pipe filter e insertar
         el código especificado abajo.
*/
import { Pipe, PipeTransform } from '@angular/core';
/* 
      Importamos una clase  Cliente en carpeta fuente
      mediante el comando de angular/cli:
         > ng generate interface cliente

*/
import { Cliente } from './cliente';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: Cliente[],terminoDeBusqueda: string): Cliente[] {
      if(terminoDeBusqueda.toLowerCase()){ 
        return array.filter((cliente: Cliente) => cliente.nombre.toLowerCase().indexOf(terminoDeBusqueda) !== -1);
      }
      else { 
        return array;
      }
  }
}