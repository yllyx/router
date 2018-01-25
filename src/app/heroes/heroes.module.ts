import { HeroDetailComponent } from './hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@Angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  exports: []
})
export class HeroesModule { }
