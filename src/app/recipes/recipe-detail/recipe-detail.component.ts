import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToShow: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addToList() {
    this.shoppingListService.addListOfIngredients(this.recipeToShow.ingredients);
    return false;
  }


}
