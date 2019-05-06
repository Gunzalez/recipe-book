import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import {RecipeService} from '../recipe.service';

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

    private formInit() {

         let name = '';
         let imagePath = '';
         let description = '';
         const recipeIngredients = new FormArray([]);

         if (this.editMode) {
            const recipe = this.recipeService.getRecipeWithIndex(this.id);
            name = recipe.name + '';
            imagePath = recipe.imagePath + '';
            description = recipe.description + '';
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
        this.recipeForm.reset();
    }
}
