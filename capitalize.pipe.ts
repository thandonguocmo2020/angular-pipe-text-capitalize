/**
 * Created by Administrator on 15/12/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})

export class CapitalizePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
    if(isString(value)){
     let  txt : string[] = value.split(" ");
      let txtReturn : string = "";
      for(let item of txt){
       txtReturn +=  item.charAt(0).toUpperCase()+ item.substr(1).toLowerCase() + " ";
       }
       return txtReturn;
    }
    return value;
  }
}
