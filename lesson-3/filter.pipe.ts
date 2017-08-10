import { Pipe, PipeTransform } from '@angular/core';
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