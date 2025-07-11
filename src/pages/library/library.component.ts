import { Component } from '@angular/core';
import { BookComponent } from '../../components/book/book.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

}
