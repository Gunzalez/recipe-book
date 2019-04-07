import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToShow: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  addToList() {
    this.recipeService.addListOfIngredients(this.recipeToShow.ingredients);
    return false;
  }


}
