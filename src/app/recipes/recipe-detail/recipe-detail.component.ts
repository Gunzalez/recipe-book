import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    recipeToShow: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: Params) => {
            this.id = +params.get('id');
            this.recipeToShow = this.recipeService.getRecipeWithIndex(this.id);
        });
    }

    onAddToList() {
        this.recipeService.addListOfIngredients(this.recipeToShow.ingredients);
        return false;
    }

    onEditThisRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/'], { relativeTo: this.route });
    }
}
