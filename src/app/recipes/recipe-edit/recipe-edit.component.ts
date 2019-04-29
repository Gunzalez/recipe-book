import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

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
                private fb: FormBuilder) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: Params) => {
            this.id = +params.get('id');
            this.editMode = params.get('id') !== null;
            this.formInit();
        });
    }

    private formInit() {
        this.recipeForm = this.fb.group({
            name: ['', [ Validators.required ]],
            imagePath: ['', [ Validators.required ]],
            description: ['', [ Validators.required ]]
        });
    }

    onSubmit() {
        console.log(this.recipeForm.value);
        this.recipeForm.reset();
    }
}
