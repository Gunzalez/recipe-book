import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {

    id: number;
    editMode = false;
    recipeForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private fb: FormBuilder,
                private recipeService: RecipeService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: Params) => {
            this.id = +params.get('id');
            this.editMode = params.get('id') !== null;
            this.formInit();
        });
    }

    getIngredients() {
        return (this.recipeForm.get('ingredients') as FormArray).controls;
    }

    addNewIngredient() {
        (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
            name : new FormControl('', Validators.required),
            amount : new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        }));
    }

    private formInit() {

         let name = '';
         let imagePath = '';
         let description = '';
         const recipeIngredients = new FormArray([]);

         if (this.editMode) {
            const recipe = this.recipeService.getRecipeWithIndex(this.id);
            name = recipe.name.toString();
            imagePath = recipe.imagePath.toString();
            description = recipe.description.toString();
            if (recipe.ingredients) {
                for (const ingredient of recipe.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            name : new FormControl(ingredient.name),
                            amount : new FormControl(ingredient.amount)
                        })
                    );
                }
            }
         }

         this.recipeForm = this.fb.group({
            name: [name, [ Validators.required ]],
            imagePath: [imagePath, [ Validators.required ]],
            description: [description, [ Validators.required ]],
            ingredients: recipeIngredients
        });
    }

    onSubmit() {
        const name = this.recipeForm.value.name;
        const imagePath = this.recipeForm.value.imagePath;
        const description = this.recipeForm.value.description;
        const ingredients: Ingredient[] = this.recipeForm.value.ingredients.map(ingredient => {
            return new Ingredient(ingredient.name, ingredient.amount);
        });
        const newRecipe = new Recipe(name, description, imagePath, ingredients);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, newRecipe);
        } else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.clearAndLeave();
    }

    clearAndLeave() {
        this.recipeForm.reset();
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onCancel() {
        this.clearAndLeave();
    }
}
