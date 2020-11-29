import { TestBed } from '@angular/core/testing';

import { NgxNumToWordsService } from './ngx-num-to-words.service';

describe('NgxNumToWordsService', () => {
  let service: NgxNumToWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNumToWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
