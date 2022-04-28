import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'A simple Test',
            'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=300,272',[
                new Ingredient('Meat', 1),
                new Ingredient('French', 20) 
            ]),
        new Recipe('A test Recipe','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cons','https://unsplash.it/300/272?id=2',[
            new Ingredient('Buns',1),
            new Ingredient('Meat',1)
        ])
      ];
      constructor(private slService: ShoppingListService){}
      getRecipes (){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
      }
}