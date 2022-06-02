import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [ 
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
  {path: 'recipes', loadChildren: () => import( './recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'shopping-list', loadChildren: () => import( './shopping-list/shopping-list.module').then(n => n.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import( './auth/auth.module').then(o => o.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
