import { Injectable } from '@angular/core';
// @ts-ignore
import n2words from 'n2words';
import { SUPPORTED_LANGUAGE } from './i18n';


@Injectable({
  providedIn: 'root'
})
export class NgxNumToWordsService {


  inWords(value: number, lang?: SUPPORTED_LANGUAGE): string {
    return n2words(value, { lang });
  }

}
