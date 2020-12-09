import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(text: any, length: number = 20, suffix: string = '...'): any {
    
    if(text.length >= length) {
      return  text.slice(0, length) + suffix;
    } 
    return text
  }

}
