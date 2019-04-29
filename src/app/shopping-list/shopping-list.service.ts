import {Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  ingredientToEdit = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 8),
    new Ingredient('Tomatoes', 4)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index) {
      return this.ingredients.slice()[index];
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addListOfIngredients(ingredients: Ingredient[]) {
    this.ingredients.unshift(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientsChanged.next(this.ingredients.slice());
  }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
