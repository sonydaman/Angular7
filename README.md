## FOR INSTALLING :
## 
`
    git clone 
    npm i
    npm i node-sass
    ng serve -o
    ng serve --port 8080 --host 0.0.0.0  --disableHostCheck true
`
## FOR PUSHING : 
##
`
git add . && git commit -a -m "Add your message" && git push origin master
`

## Angular7

## For Starting project in angular 7 we need to follows these step 
## 
 1.) npm install -g @angular/cli
 
 2.) ng new ng7-pre
 
 3.) a.) ? Would you like to add Angular routing? Yes
 
     b.) ? Which stylesheet format would you like to use? SCSS   [ http://sass-lang.com   ]
     
 4.) cd ng7
 
 5.) ng serve -o
 
 6.) ng generate component nav

 7.) ng g c about

 8.) ng g c contact

 9.) ng g c home

 10.) app.component.html
            `
            <app-nav></app-nav>
                <section>
                <router-outlet></router-outlet>
            </section>
            `

## 11.) /src/app/nav/nav.component.ts
            `<header>
            <div class="container">
                <a routerLink="/" class="logo">apptitle</a>
                <a routerLink="/">{{ appTitle }}</a>
                <nav>
                <ul>
                    <li><a routerLink="/">Home</a></li>
                    <li><a routerLink="/about">About</a></li>
                    <li><a routerLink="/contact">Contact us</a></li>
                </ul>
                </nav>
            </div>
            </header>
            `

## 12.) nav.component.ts
            `appTitle: string = 'myapp';
            // OR (either will work)
            appTitle = 'myapp';
            `

## 13.) /src/styles.scss 
            `
            @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

            body, html {
                height: 100%;
                margin: 0 auto;
            }

            body {
                font-family: 'Montserrat';
                font-size: 18px;
            }

            a {
                text-decoration: none;
            }

            .container {
                width: 80%;
                margin: 0 auto;
                padding: 1.3em;
                display: grid;
                grid-template-columns: 30% auto;

                a {
                    color: white;
                }
            }

            section {
                width: 80%;
                margin: 0 auto;
                padding: 2em;
            }
            `

## 14.) nav/component.scss
            header {
                background: #7700FF;

                .logo {
                    font-weight: bold;
                }

                nav {
                    justify-self: right;
                
                    ul {
                        list-style-type: none;
                        margin: 0; padding: 0;

                        li {
                            float: left;

                            a {
                                padding: 1.5em;
                                text-transform: uppercase;
                                font-size: .8em;

                                &:hover {
                                    background: #8E2BFF;
                                }
                            }
                        }
                    }
                }
            }
## 15.) /src/app/home/home.component.html
`<h1>Home</h1>
<button (click)="firstClick()">Click me</button>`
## 16.) home.component.ts 
```
firstClick() {
    console.log('clicked');
  }
  ===================
  (focus)="myMethod()"
(blur)="myMethod()" 
(submit)="myMethod()"  
(scroll)="myMethod()"

(cut)="myMethod()"
(copy)="myMethod()"
(paste)="myMethod()"

(keydown)="myMethod()"
(keypress)="myMethod()"
(keyup)="myMethod()"

(mouseenter)="myMethod()"
(mousedown)="myMethod()"
(mouseup)="myMethod()"

(click)="myMethod()"
(dblclick)="myMethod()"

(drag)="myMethod()"
(dragover)="myMethod()"
(drop)="myMethod()"
```
## 17.) Angular 7 Class & Style Binding
````
 home.component.html
<h1 [class.gray]="h1Style">Home</h1>
<h1 [ngClass]="{ 'gray': h1Style, 'large': !h1Style}">Home</h1>

<h1 [style.color]="h1Style ? 'gray': 'black'">Home</h1>
<h1 [ngStyle]="{'color': h1Style ? 'gray' : 'black','font-size': !h1Style ? '1em' : '4em'}">Home</h1>
`

===================================

`
home.component.ts file:
 h1Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.h1Style = true;
  }
`
===================================
`
Component's scss file:
.gray {
    color: gray;
}
.large {
    font-size: 4em;
}
````
## 18.) Angular 7 Services
```
ng generate service data

==================================

/src/app/data.service.ts
// Other code removed for brevity

export class DataService {

  constructor() { }

  firstClick() {
    return console.log('clicked');
  }
}
===================================
/src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  firstClick() {
    this.data.firstClick();
  }

}
````
## 19.) Angular 7 HTTP Client
`````
/src/app/app.module.ts 

// Other imports
import { HttpClientModule } from '@angular/common/http';


imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // <-- Right here
  ],
  

===============================================

/src/app/data.service.ts
import { HttpClient } from '@angular/common/http';  // Import it up her
@Injectable({
  providedIn: 'root'
})

constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }


================================================

home.component.ts
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }

}


=================================================

home.component.html 
<h1>Users</h1>

<ul *ngIf="users">
  <li *ngFor="let user of users.data">
    <img [src]="user.avatar">
    <p>{{ user.first_name }} {{ user.last_name }}</p>
  </li>
</ul>

==================================================

home.component.scss
ul {
    list-style-type: none;
    margin: 0;padding: 0;

    li {
        background: rgb(238, 238, 238);
        padding: 2em;
        border-radius: 4px;
        margin-bottom: 7px;
        display: grid;
        grid-template-columns: 60px auto;

        p {
            font-weight: bold;
            margin-left: 20px;
        }

        img {
            border-radius: 50%;
            width: 100%;
        }
    }
}
`
