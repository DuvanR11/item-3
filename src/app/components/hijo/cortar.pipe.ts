import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cortar',
})

export class CortarPipe implements PipeTransform {

  transform(valor: any, ...args: any[]) {
    let contador = 0;
      for(const value of valor){
        contador++
        if(value == '_'){
          return valor.slice(0, contador - 1);
        }
      }
  }
}
