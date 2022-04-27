import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A test Recipe','A simple Test','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=300,272'),
        new Recipe('A test Recipe','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cons','https://unsplash.it/300/272?id=2')
      ];
      getRecipes (){
          return this.recipes.slice();
      }
}