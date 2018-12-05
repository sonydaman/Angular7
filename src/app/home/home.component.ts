import { Component, OnInit ,ViewChild } from '@angular/core';
import { DataService } from '../data.service';
// import { ArticlesComponent } from '../articles/articles.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;
  // @ViewChild(ArticlesComponent) appArticle : ArticlesComponent;
  constructor(private data: DataService) { }

  ngOnInit() {
  //   this.data.getUsers().subscribe(data => {
  //     this.users = data
  //     console.log(this.users);
  //   }
  // );
  // this.appArticle.getData();
  }
  firstClick() {
    console.log('clicked--component');
    this.h1Style = true;
    this.data.firstClick();
  }
}
