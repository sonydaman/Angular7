import { NgModule } from "@angular/core";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipeRoutingModule } from "./recipes-routing.module";
@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent,
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, RecipeRoutingModule],
   
})
export class RecipesModule {}