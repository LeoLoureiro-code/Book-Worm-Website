import { Component } from '@angular/core';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { BookStateComponent } from '../../components/book-state/book-state.component';
import { BookEmotionRateComponent } from '../../components/book-emotion-rate/book-emotion-rate.component';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [BookFormComponent, BookStateComponent, BookEmotionRateComponent],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {

}
