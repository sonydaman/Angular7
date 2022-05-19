import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipService.getRecipes();
        this.http.put('https://my-course-recipe-d06f8-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(Response => {
            console.log(Response);
        });
    }
    fetchRecipes(){
       return this.authService.user.pipe(take(1),
        exhaustMap((user:any) => {
            return this.http.get<Recipe[]>('https://my-course-recipe-d06f8-default-rtdb.firebaseio.com/recipes.json',
            {
                params: new HttpParams().set('auth',user.token)
            }
            );
        }),
        map(recipes =>{
            return recipes.map(recipes => {
                return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients: []
                };
            });  
        }),
      tap(recipes => {
          this.recipService.setRecipes(recipes);
      })
       );
    }
}