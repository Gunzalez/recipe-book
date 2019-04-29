import {
  Component,
  OnInit,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

    onSubmit(form: NgForm) {
      const data = form.value;
      const ingredient: Ingredient = new Ingredient(data.name, data.amount);
      this.shoppingListService.addNewIngredient(ingredient);
      form.reset();
  }
}
