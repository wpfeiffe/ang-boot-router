import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
import { Location }                 from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  id: string;
  hero: Hero = {id: 0, name: '(None)'};

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
    route.params.subscribe(params => {this.id = params['id'];});
  }

  ngOnInit() {
    this.heroService.getSingleHero(Number(this.id))
         .then(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

}
