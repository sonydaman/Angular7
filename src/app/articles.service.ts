import { Injectable } from '@angular/core';
// import * as lf from 'lovefield';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
  getArticles(){
    console.log(this,"Hi");
  }
}
