import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let message = '';
    if (value.length == 1) {
      return message = value[0].name;
    }
    if (value.length > 1 && value.length < 5) {
      return message = `Будзе запампавана ${value.length} файла`;
    }
    if (value.length >= 5 || value.length % 10 > 4  && value.length < 20) {
      return message = `Будзе запампавана ${value.length} файлаў`;
    }
    if (value.length % 10 <= 4 && value.length >= 20) {
      return message = `Будзе запампавана ${value.length} файла`;
    }
    return null;
  }

}
