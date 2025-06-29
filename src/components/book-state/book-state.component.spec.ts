import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStateComponent } from './book-state.component';

describe('BookStateComponent', () => {
  let component: BookStateComponent;
  let fixture: ComponentFixture<BookStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
