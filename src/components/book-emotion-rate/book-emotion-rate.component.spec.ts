import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEmotionRateComponent } from './book-emotion-rate.component';

describe('BookEmotionRateComponent', () => {
  let component: BookEmotionRateComponent;
  let fixture: ComponentFixture<BookEmotionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEmotionRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEmotionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
