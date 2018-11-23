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