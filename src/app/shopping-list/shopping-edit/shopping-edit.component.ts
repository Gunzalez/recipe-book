import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.sass"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("amountInput") amountInput: ElementRef;
  @ViewChild("nameInput") nameInput: ElementRef;

  @Output() onIngredientAdd = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  addIngredient() {
    const ingredient: Ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.onIngredientAdd.emit(ingredient);
    return false;
  }
}
