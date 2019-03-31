import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.sass"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Bread", 8),
    new Ingredient("Tomatoes", 4)
  ];

  constructor() {}

  ngOnInit() {}

  newIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);
  }
}
