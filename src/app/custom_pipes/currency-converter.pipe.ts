import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})

export class CurrencyConverterPipe implements PipeTransform {

  transform(amount: number, ...args: string[]): unknown {
    
    //Note: Incoming value is considered as Dollar always
    let convertedAmount = 0;

    // Convert to uppercase so if user has entered any of this (inr, Inr, INR) will work.
    const currencyCode = args[0]?.toUpperCase();

    switch(currencyCode) {
      case 'INR' : {
        const inrRate = 85;
        convertedAmount = amount * inrRate;
        break;
      }
      case 'EUR' : {
        const eurRate = 0.85;
        convertedAmount = amount * eurRate;
        break;
      }
      case 'Riyal' : {
        const riyalRate = 3.75;
        convertedAmount = amount * riyalRate;
        break;
      }
      default : {
        // No conversation, direct assigment.
        convertedAmount = amount;
      }
    }
    return convertedAmount;
  }

  // Another way to do the above same code in shorter way
  // const rates: Record<string, number> = {
  //   INR: 85,
  //   EUR: 0.85,
  //   RIYAL: 3.75
  // };

  // return amount * (rates[currency?.toUpperCase()] ?? 1);
}
