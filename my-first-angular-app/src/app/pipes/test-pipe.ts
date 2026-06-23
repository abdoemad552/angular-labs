import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TestPipe implements PipeTransform {
  transform(value: string, limit = 50, ellipses = '...'): any {
    if (value.length <= limit) return value;
    return value.slice(0, limit) + ellipses;
  }
}
