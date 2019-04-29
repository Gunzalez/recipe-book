import {Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Bread', 8),
    new Ingredient('Tomatoes', 4)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addListOfIngredients(ingredients: Ingredient[]) {
    this.ingredients.unshift(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
