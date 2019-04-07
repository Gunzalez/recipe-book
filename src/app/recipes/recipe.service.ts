import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [

    new Recipe(
      'Hamburger',
      'Delicious beef patties in bread',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg'
    ),
    new Recipe(
      'Mac & Cheese',
      'Creamy macaroni and cheese pastry',
      'https://assets.kraftfoods.com/recipe_images/opendeploy/545833_2_1_retail-cb37e625c3d35cac0680f349e3b907ccd8a48313_642x428.jpg'
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
