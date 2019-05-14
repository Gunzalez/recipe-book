import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient,
                private recipeService: RecipeService) { }

    storeRecipes() {

        return this.http.put(
            'https://ng-recipe-book-885dd.firebaseio.com/ng-recipe-book-885dd.json',
            this.recipeService.getRecipes(),
            { observe: 'response'});
    }

    fetchRecipes() {
        return this.http.get(
            'https://ng-recipe-book-885dd.firebaseio.com/ng-recipe-book-885dd.json',
            { observe: 'response'})
            .pipe(map((response: HttpResponse<object>) => {
                const recipes: Recipe[] = response.body as Array<Recipe>;
                for (const recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            }))
            .subscribe( (recipes: Recipe[]) => {
                this.recipeService.fetchRecipes(recipes);
            });
    }
}
