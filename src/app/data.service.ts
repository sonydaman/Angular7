import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public activities$: Observable<any>;
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users')
  }
  firstClick() {
    return console.log('clicked');
  }
}