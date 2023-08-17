import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  constructor(private _BooksService:BooksService)
  {}
  @Input() bookId: number|any;
  SpecaficBook: Book = {
  id : 0,
  title: "",
  author: "",
  publicationYear: 0,
  description: "",
  thumbnailUrl:""

  };
  ngOnInit(): void {
    this._BooksService.getSpecificBook(this.bookId).subscribe({
      next: (res) => {
        this.SpecaficBook = res;
      }
    })
  }

  exitPopUp() {
    this._BooksService.isWork.next(false);
  }

}
