## FOR INSTALLING :
## 
```
    git clone https://github.com/sonydaman/Angular7.git
    
    npm i
    
    npm i node-sass
    
    ng serve -o
    
    ng serve --port 8080 --host 0.0.0.0  --disableHostCheck true
```
## FOR PUSHING : 
##
`
git add . && git commit -a -m "Add your message" && git push origin master
`

## Angular7

## For Starting project in angular 7 we need to do these step 
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
### Add Routing
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
```
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


`````
##20.) Angular 7 Forms
==========================================================================
File : app.module.ts
```
// other imports
import { ReactiveFormsModule } from '@angular/forms';

// other code
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  // <- Add here
  ],
 ```
  =====================
  File : contact.component.ts 
  ```
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
}

}
```
====================================================================
File : contact.component.html
```
<h1>Contact us</h1>

<form [formGroup]="messageForm" (ngSubmit)="onSubmit()">

    <h5 *ngIf="success">Your form is valid!</h5>

    <label>
      Name:
      <input type="text" formControlName="name">
      <div *ngIf="submitted && messageForm.controls.name.errors" class="error">
        <div *ngIf="messageForm.controls.name.errors.required">Your name is required</div>
      </div>
    </label>
  
    <label>
      Message:
      <textarea formControlName="message"></textarea>
      <div *ngIf="submitted && messageForm.controls.message.errors" class="error">
        <div *ngIf="messageForm.controls.message.errors.required">A message is required</div>
      </div>
    </label>

    <input type="submit" value="Send message" class="cta">
  
  </form>

  <div *ngIf="submitted" class="results">
    <strong>Name:</strong> 
    <span>{{ messageForm.controls.name.value }}</span>

    <strong>Message:</strong> 
    <span>{{ messageForm.controls.message.value }}</span>
  </div>
  
 ```
 ==================================================================
  File : contact.component.scss
  ```
  label {
    display: block;
    
    input, textarea {
        display: block;
        width: 50%;
        margin-bottom: 20px;
        padding: 1em;
    }

    .error {
        margin-top: -20px;
        background: yellow;
        padding: .5em;
        display: inline-block;
        font-size: .9em;
        margin-bottom: 20px;
    }
}

.cta {
    background: #7700FF;
    border: none;
    color: white;

    text-transform: uppercase;
    border-radius: 4px;
    padding: 1em;
    cursor: pointer;
    font-family: 'Montserrat';
}

.results {
    margin-top: 50px;

    strong {
        display: block;
    }
    span {
        margin-bottom: 20px;
        display: block;
    }
}
  ```
  To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=========================================================================
## END OF ANGULAR 7
