import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addIngredient() {
    const ingredient: Ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.shoppingListService.addNewIngredient(ingredient);
    return false;
  }
}
