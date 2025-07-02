import { Component } from '@angular/core';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { BookStateComponent } from '../../components/book-state/book-state.component';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [BookFormComponent, BookStateComponent],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {

}
