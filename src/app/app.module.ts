import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemChallengeComponent } from './item-challenge/item-challenge.component';
import { ItemMaterialComponent } from './item-material/item-material.component';
import { ListMaterialsComponent } from './list-materials/list-materials.component';
import { ListChallengesComponent } from './list-challenges/list-challenges.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { MaterialPageComponent } from './material-page/material-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
    HomePageComponent,
    ItemChallengeComponent,
    ItemMaterialComponent,
    ListMaterialsComponent,
    ListChallengesComponent,
    ChallengePageComponent,
    MaterialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
