import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCrudRoutingModule } from './hero-crud-routing.module';
import { HeroCrudComponent } from './hero-crud.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from "../services/hero.service";
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';


@NgModule({
  imports: [
    CommonModule,
    HeroCrudRoutingModule,
    Angular2FontAwesomeModule
  ],
  declarations: [HeroCrudComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class HeroCrudModule { }
