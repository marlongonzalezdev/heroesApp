import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AddHeroeComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroeCardComponent,
    ImagenPipe,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
