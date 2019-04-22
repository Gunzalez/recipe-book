import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeToShow: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.paramMap.subscribe((params: Params) => {
          this.id = +params.get('id');
          this.recipeToShow = this.recipeService.getRecipeWithIndex(this.id);
      });
  }

  addToList() {
    this.recipeService.addListOfIngredients(this.recipeToShow.ingredients);
    return false;
  }


}
