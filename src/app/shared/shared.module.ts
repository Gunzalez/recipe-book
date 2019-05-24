import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleMenuDirective } from './toggle-menu.directive';

@NgModule({
    declarations: [
        ToggleMenuDirective
    ],
    exports: [
        CommonModule,
        ToggleMenuDirective
    ]
})
export class SharedModule { }
