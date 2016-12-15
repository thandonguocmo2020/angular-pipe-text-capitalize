/**
 * Created by Administrator on 15/12/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})

export class CapitalizePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;

        return value.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}
