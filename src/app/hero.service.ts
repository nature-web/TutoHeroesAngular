import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) {}

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);

    this.angularLog('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(heroFromArray => heroFromArray.id === id)!;
    this.angularLog(`fetched hero id=${id}`);
    return of(hero);
  }

  angularLog(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
}
