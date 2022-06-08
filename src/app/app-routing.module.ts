import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [ 
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
  {path: 'recipes', loadChildren: () => import( './recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'shopping-list', loadChildren: () => import( './shopping-list/shopping-list.module').then(n => n.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import( './auth/auth.module').then(o => o.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
