import {Pipe, PipeTransform} from '@angular/core';
// @ts-ignore
import n2words from 'n2words';
import {SUPPORTED_LANGUAGE} from './i18n';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  transform(value: number, lang?: SUPPORTED_LANGUAGE): unknown {
    return n2words(value, {lang});
  }

}
