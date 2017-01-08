import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero.service";
import {Hero} from "../services/hero";

@Component({
  selector: 'app-comp1',
  templateUrl: './hero-crud.component.html',
  styleUrls: ['./hero-crud.component.css']
})
export class HeroCrudComponent implements OnInit {

  title : string = "Component 1";
  message : string = "This is the first component";
  heroes : Hero[] = [];

  constructor(
      private heroService: HeroService,
  ){}

  ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);

  }

  deleteHero(heroId: number): void {
    this.heroService
        .delete(heroId)
        .then(() => {
          for (var item in this.heroes) {
            if (this.heroes[item].id == heroId) {
              this.heroes.splice(Number(item), 1)
            }
          }
        });
  }

}
