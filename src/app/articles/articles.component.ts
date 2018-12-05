import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { ArticlesService } from '../articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  
})
export class ArticlesComponent implements OnInit {
public data : object = {
    "Articles" : "Hi this is first article"
  };
  constructor(  private articlesService: ArticlesService ) { }

  ngOnInit() {
  }
  getData(){
    // this.dataService.getUsers().subscribe( (data) =>{
    //   console.log(data);
    // })
    this.articlesService.getArticles();
    return this.data;
  }
}
