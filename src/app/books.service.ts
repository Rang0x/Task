import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _HttpClient: HttpClient) { }

  isWork = new BehaviorSubject<Boolean>(false);

  getBooks():Observable<any> {
    return this._HttpClient.get('http://localhost:3000/books');
  }

  getSpecificBook(id: number): Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/books/${id}`);
  }

}
