import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
   new Recipe('A test Recipe','A simple Test','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=300,272'),
   new Recipe('A test Recipe','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cons','https://unsplash.it/300/272?id=2')
 ];
 
 constructor() {
  }

  ngOnInit() {
  }
  OnRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
function styleUrls(arg0: { selector: string; templateUrl: string; }, arg1: { "": number; }, styleUrls: any, arg3: string[]) {
  throw new Error('Function not implemented.');
}

