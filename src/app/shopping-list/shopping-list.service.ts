import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Bread', 8),
    new Ingredient('Tomatoes', 4)
  ];

  getIngredients() {
    return this.ingredients;
  }

  addNewIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.unshift(ingredient);
  }
}
