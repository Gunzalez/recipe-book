import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService implements OnInit {

    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) { }

    ngOnInit(): void {
    }

    storeRecipes() {
        const token = this.authService.getToken();

        return this.http.put(
            'https://ng-recipe-book-885dd.firebaseio.com/ng-recipe-book-885dd.json?auth=' + token,
            this.recipeService.getRecipes(),
            { observe: 'response'});
    }

    fetchRecipes() {
        const token = this.authService.getToken();

        return this.http.get(
            'https://ng-recipe-book-885dd.firebaseio.com/ng-recipe-book-885dd.json?auth=' + token,
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
