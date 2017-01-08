import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

@Component({
  selector: 'app-comp1',
  templateUrl: './hero-crud.component.html',
  styleUrls: ['./hero-crud.component.css']
})
export class HeroCrudComponent implements OnInit {

    title: string = "Heroes";
    message: string = "Heroes Listing";
    heroes: Hero[] = [];

    constructor(private heroService: HeroService,) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);

    }

    deleteHero(heroId: number): void {
        this.heroService
            .delete(heroId)  // delete the selected hero from server
            .then(() => {
                for (var item in this.heroes) {
                    if (this.heroes[item].id == heroId) {   // if server delete worked and we found the selected hero
                        this.heroes.splice(Number(item), 1)   // remove from heroes list
                    }
                }
            });
    }

    viewHero(heroId: number): void {
        console.log("You picked hero: " + heroId)
    }
}