import { Pipe, PipeTransform } from '@angular/core';
import { Macbook } from '../models/macbook';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(macbooks: Macbook[], macbookName: string) {

    if (!macbooks) {
      return [];
    }

    if (!macbookName) {
      return macbooks;
    }

    return macbooks.filter((macbook) => {
      return macbook.name.toLowerCase().includes(macbookName.toLowerCase());
    });
  }

}
