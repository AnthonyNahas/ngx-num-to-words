import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatLegacySelectChange as MatSelectChange } from '@angular/material/legacy-select';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxNumToWordsService, SUPPORTED_LANGUAGE } from 'ngx-num-to-words';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngx-num-to-word-demo';
  fc = new UntypedFormControl(123);
  numberInWords!: string;
  lang!: SUPPORTED_LANGUAGE;
  initialValue = 123;

  constructor(private ngxNumToWordsService: NgxNumToWordsService) {
  }

  selectionChange($event: MatSelectChange): void {
    console.log('selectionChange', $event);
    this.lang = $event.value;
    this.numberInWords = this.ngxNumToWordsService.inWords(+this.fc.value, this.lang);
  }

  ngOnInit(): void {

    this.numberInWords = this.ngxNumToWordsService.inWords(+this.fc.value);

    this.fc
      .valueChanges
      .pipe(untilDestroyed(this), debounceTime(400), distinctUntilChanged())
      .subscribe((value => {
        console.log('value ->', value);
        this.numberInWords = this.ngxNumToWordsService.inWords(+value, this.lang);
      }));
  }
}
