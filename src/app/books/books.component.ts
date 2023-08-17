import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private _BooksService: BooksService) { }
  isWork:boolean=false;
  id:number|any;
  Books: Book[] = [];
  ngOnInit() {
    this._BooksService.getBooks().subscribe({
      next: (res) => {
        this.Books = res;
      }
    })

    this._BooksService.isWork.subscribe({
      next: () => {
        if (this._BooksService.isWork.getValue() == false) {
          this.isWork = false;
        } else {
          this.isWork = true;
        }
      }
    })
  }

  getDeatils(id:number) {
    this._BooksService.isWork.next(true);
    this.id = id;
  }


}
