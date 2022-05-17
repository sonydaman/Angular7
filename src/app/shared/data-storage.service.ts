import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipService.getRecipes();
        this.http.put('https://my-course-recipe-d06f8-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(Response => {
            console.log(Response);
        });
    }
    fetchRecipes(){
       return this.http.get<Recipe[]>('https://my-course-recipe-d06f8-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes =>{
            return recipes.map(recipes => {
                return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients: []};
            });
        }),
        tap(recipes => {
            this.recipService.setRecipes(recipes);
        })
        )
       
    }
}