import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appToggleMenu]"
})
export class ToggleMenuDirective {
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}
