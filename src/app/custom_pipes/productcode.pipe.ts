import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productcode'
})

export class ProductcodePipe implements PipeTransform {
 
  // This pipe will change ProductId into ProductCode.
  transform(value: unknown, ...args: unknown[]): unknown {
    return 'pro_' + value + '';
  }
}
