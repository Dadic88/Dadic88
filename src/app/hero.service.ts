import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
    private heroes: string[] = ['Superman', 'Batman', 'Wonder Woman'];
  
    
  
    getHeroes(): string[] {
      return this.heroes;
    }
  
    addHero(name: string): void {
      this.heroes.push(name);
    }
  
    deleteHero(name: string): void {
      this.heroes = this.heroes.filter(hero => hero !== name);
    }
  }
}
