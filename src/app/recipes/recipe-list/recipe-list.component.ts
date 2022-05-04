import { Component, OnInit  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
 
 constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
     this.router.navigate(['new'], {relativeTo: this.route});
  }
 

}
function styleUrls(arg0: { selector: string; templateUrl: string; }, arg1: { "": number; }, styleUrls: any, arg3: string[]) {
  throw new Error('Function not implemented.');
}

