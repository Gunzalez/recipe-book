import {
    Component,
    OnInit, ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('form') ingredientForm: NgForm;
    subscription: Subscription;
    indexOfItemToBeEdited: number;
    editingMode = false;
    ingredientToEdit: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.subscription = this.shoppingListService.ingredientToEdit
            .subscribe((index: number) => {
                this.indexOfItemToBeEdited = index;
                this.editingMode = true;
                this.ingredientToEdit = this.shoppingListService.getIngredient(index);
                this.ingredientForm.setValue({
                    name: this.ingredientToEdit.name,
                    amount: this.ingredientToEdit.amount
                });
        });
    }

    onSubmit(form: NgForm) {
        const data = form.value;
        const ingredient: Ingredient = new Ingredient(data.name, data.amount);
        if (this.editingMode) {
            this.shoppingListService.updateIngredient(this.indexOfItemToBeEdited, ingredient);
        } else {
            this.shoppingListService.addNewIngredient(ingredient);
        }
        form.reset();
        this.editingMode = false;
    }

    actionText() {
        return this.editingMode ? 'Update' : 'Add';
    }

    onClearForm() {
        this.ingredientForm.reset();
        this.editingMode = false;
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.indexOfItemToBeEdited);
        this.onClearForm();
    }
}
