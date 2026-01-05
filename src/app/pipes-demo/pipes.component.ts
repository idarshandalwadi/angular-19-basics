import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductcodePipe } from '../custom_pipes/productcode.pipe';
import { SquarePipe } from '../custom_pipes/square-root.pipe';
import { CurrencyConverterPipe } from '../custom_pipes/currency-converter.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, ProductcodePipe, SquarePipe, CurrencyConverterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})

export class PipesComponent {

  title: string = 'Demo of UpperCase PIPE';
  titleCaseVar : string = 'Demo of title case PIPE';
  amount : number = 100;
  todaysDate = Date.now();
  productId : number = 101;
}
