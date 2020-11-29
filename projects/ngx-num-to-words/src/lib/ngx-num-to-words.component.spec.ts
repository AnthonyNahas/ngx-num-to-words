import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNumToWordsComponent } from './ngx-num-to-words.component';

describe('NgxNumToWordsComponent', () => {
  let component: NgxNumToWordsComponent;
  let fixture: ComponentFixture<NgxNumToWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNumToWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNumToWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
