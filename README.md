# Angular7

For Starting project in angular 7 we need to follows these step 
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
11.) /src/app/nav/nav.component.ts
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
12.) nav.component.ts
            `appTitle: string = 'myapp';
            // OR (either will work)
            appTitle = 'myapp';
            `
13.) /src/styles.scss 
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
14.) nav/component.scss
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
15.) \src\app\app.module.ts
        `
        import { HomeComponent } from './home/home.component';
        import { AboutComponent } from './about/about.component';
        import { ContactComponent } from './contact/contact.component';

        const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        ];
        `
16.) /src/app/home/home.component.html
    `
    <h1>Home</h1>
    <button (click)="firstClick()">Click me</button>
    `
17.) home.component.ts
    `
    firstClick() {
        console.log('clicked');
    }
    `
18.) event handeler
    `
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
    `
19.) home.component.html
    <h1 [class.gray]="h1Style">Home</h1>
20.) home.component.ts
    h1Style: boolean = false;
    firstClick() {
        this.h1Style = true;
    }
21.) home.component.scss
    .gray {
    color: gray;
    }
22.) home.component.html
    <h1 [ngClass]="{
        'gray': h1Style,
        'large': !h1Style
        }">Home</h1>
23.) home.component.scss
    .large {
        font-size: 4em;
    }
24.) home.component.html
    <h1 [style.color]="h1Style ? 'gray': 'black'">Home</h1>
25.) home.component.html
    <h1 [ngStyle]="{
                'color': h1Style ? 'gray' : 'black',
                'font-size': !h1Style ? '1em' : '4em'
                }">Home</h1>
26.) ng generate service data
27.)  /src/app/data.service.ts
    // Other code removed for brevity
    export class DataService {

        constructor() { }

        firstClick() {
            return console.log('clicked');
        }
    }
28.)  /src/app/home/home.component.ts
    import { DataService } from '../data.service';
    constructor(private data: DataService) { }
    firstClick() {
        this.data.firstClick();
    }
29.) /src/app/app.module.ts
    import { HttpClientModule } from '@angular/common/http';
30.)  /src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
}
31.) reqres.in 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example