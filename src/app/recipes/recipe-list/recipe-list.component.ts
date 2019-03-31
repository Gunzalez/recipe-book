import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.sass"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Hamburger",
      "Delicious beef patties in bread",
      "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg"
    ),
    new Recipe(
      "Mac & Cheese",
      "Creamy macaroni and cheese pastry",
      "https://assets.kraftfoods.com/recipe_images/opendeploy/545833_2_1_retail-cb37e625c3d35cac0680f349e3b907ccd8a48313_642x428.jpg"
    )
  ];

  @Output() selectedRecipeInList = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  selectedRecipe(recipe: Recipe) {
    this.selectedRecipeInList.emit(recipe);
  }
}
