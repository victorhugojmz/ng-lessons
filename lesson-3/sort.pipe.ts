/* 
        Antes de probar esto en tu aplicacion 
        no olvides ejecutar el comando 
         ng generate pipe sort e insertar
         el código especificado abajo.
*/
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array :any[], args?:any): any[] {
        if (array.length > 0 && args === 'ASC') { 
            return array.sort();
        }
        else if(array.length > 0 && args === 'DESC'){
            return array.sort().reverse();
        }
        else { 
            return array;
        }
   }  
}
