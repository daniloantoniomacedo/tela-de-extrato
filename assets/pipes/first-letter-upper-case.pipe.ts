import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpperCase'
})
export class FirstLetterUpperCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(value.substring(0,1), value.substring(0,1).toUpperCase());
  }

}
