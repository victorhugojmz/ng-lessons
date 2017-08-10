import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sort'
})
export class SummaryPipe implements PipeTransform{
    transform(value: any, args?){
        if(!value)
            return null;
        return value.subsrt(0,50) + "...";
    }
} 