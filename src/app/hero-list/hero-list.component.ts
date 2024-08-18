import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  heroes: string[] = [];
  newHero: string = '';

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  addHero() {
    if (this.newHero) {
      this.heroService.addHero(this.newHero);
      this.newHero = '';
    }
  }

  deleteHero(hero: string) {
    this.heroService.deleteHero(hero);
  }
}
