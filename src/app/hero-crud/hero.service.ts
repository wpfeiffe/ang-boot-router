import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  // private heroesUrl = 'app/heroes';  // URL to web api
  private heroesUrl = 'http://localhost:8080/heroes';  // URL to web api

  constructor(private http: Http, private authHttp: AuthHttp) { }

  getHeroes(): Promise<Hero[]> {
    //return this.http.get(this.heroesUrl,  new RequestOptions({headers: new Headers({'Content-Type': 'application/json', "Authorization": localStorage.getItem('id_token')})}))
    return this.authHttp.get(this.heroesUrl)
        .toPromise()
        //.then(response => response.json().data as Hero[])
        .then(response => response.json() as Hero[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.authHttp
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.authHttp
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        //            .then(res => res.json().data)
        .then(res => res.json())
        .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.authHttp.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

}
