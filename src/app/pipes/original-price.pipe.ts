import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originalPrice'
})
export class OriginalPricePipe implements PipeTransform {

  transform(currentPrice: number,discountPercentage:number): number {
    if(discountPercentage){
      return currentPrice + (currentPrice * discountPercentage / 100);
    }
    else{
      return currentPrice;
    }
  }

}
