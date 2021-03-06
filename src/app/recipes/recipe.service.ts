import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
          'Hamburger',
          'Delicious beef patties in bread',
          'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg',
          [
              new Ingredient('Bread', 2),
              new Ingredient('Meat', 1)
          ]
        ),
        new Recipe(
          'Mac & Cheese',
          'Creamy macaroni and cheese pastry',
          'https://assets.kraftfoods.com/recipe_images/opendeploy/545833_2_1_retail-cb37e625c3d35cac0680f349e3b907ccd8a48313_642x428.jpg',
           [
              new Ingredient('Mac', 2),
              new Ingredient('Cheese', 1),
              new Ingredient('Fries', 20)
          ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addListOfIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addListOfIngredients(ingredients);
    }

    getRecipeWithIndex(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.unshift(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    fetchRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
