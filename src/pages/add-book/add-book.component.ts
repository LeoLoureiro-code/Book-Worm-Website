import { Component } from '@angular/core';
import { BookFormComponent } from "../../components/book-form/book-form.component";
import { BookStateComponent } from "../../components/book-state/book-state.component";

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [BookFormComponent, BookStateComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {

}
