import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];

    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.recipeService.recipesChanged.subscribe(
        (recipes: Recipe[]) => {
            this.recipes = recipes;
            }
        );
    }

    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route});
    }
}
