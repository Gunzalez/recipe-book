import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-edit/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule,
        ShoppingListModule,
        AppRoutingModule,
        SharedModule
    ],
        providers: [],
        bootstrap: [AppComponent]
    })
export class AppModule { }
