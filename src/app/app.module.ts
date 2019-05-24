import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ToggleMenuDirective } from './shared/toggle-menu.directive';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        HeaderComponent,
        ShoppingEditComponent,
        ToggleMenuDirective,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RecipesModule,
        AppRoutingModule
    ],
        providers: [],
        bootstrap: [AppComponent]
    })
export class AppModule { }
