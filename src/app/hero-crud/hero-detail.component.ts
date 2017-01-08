import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Hero } from '../services/hero';
import { HeroService } from '../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  id: string;
  hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    route.params.subscribe(params => {this.id = params['id'];});
  }

  ngOnInit() {
    this.heroService.getHero(Number(this.id))
         .then(hero => this.hero = hero);
  }

}
