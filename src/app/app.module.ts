import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/store/cart/cart.component';
import { CartItemComponent } from './components/store/cart/cart-item/cart-item.component';
import { MenuComponent } from './components/store/menu/menu.component';
import { MenuItemComponent } from './components/store/menu/menu-item/menu-item.component';
import { PizzaCreatorComponent } from './components/store/pizza-creator/pizza-creator.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ToppingsComponent } from './components/store/pizza-creator/toppings/toppings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    StoreComponent,
    CartComponent,
    CartItemComponent,
    MenuComponent,
    MenuItemComponent,
    PizzaCreatorComponent,
    ButtonComponent,
    ToppingsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
