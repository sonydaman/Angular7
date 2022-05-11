import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  subscription: Subscription;
 
 constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
     this.router.navigate(['new'], {relativeTo: this.route});
  }
 ngOnDestroy(){
   this.subscription.unsubscribe();
 }

}
function styleUrls(arg0: { selector: string; templateUrl: string; }, arg1: { "": number; }, styleUrls: any, arg3: string[]) {
  throw new Error('Function not implemented.');
}

