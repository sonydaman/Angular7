import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipService.getRecipes();
        this.http.put('https://my-course-recipe-d06f8-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(Response => {
            console.log(Response);
        });
    }
    fetchRecipes(){
        this.http.get('https://my-course-recipe-d06f8-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes => {
            console.log(recipes);
        });
    }
}