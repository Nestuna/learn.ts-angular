import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { Hero } from '@core/models/hero';
import { HeroService } from '@core/services/hero.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  heroesToShow: Hero[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 0;

  constructor(
    private heroService: HeroService,
    ) {  }

  ngOnInit(): void {
    this.getHeroes();
    this.showFirstHeroesPage();
  }

  showFirstHeroesPage(): void {
    this.heroesToShow = this.getPageHeroes(0);
  }

  onPageChange(pageChange: PageEvent): void {
    this.heroesToShow = this.getPageHeroes(pageChange.pageIndex)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((heroes: Hero[]) => {
          this.heroes = heroes
          this.showFirstHeroesPage();
        })
  }

  getPageHeroes(pageIndex: number): Hero[] {
    this.currentPage = pageIndex;
    const start = this.itemsPerPage * pageIndex;
    const end = start + (this.itemsPerPage)
    return this.heroes.slice(start, end)
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesToShow = this.getPageHeroes(this.currentPage);

    this.heroService.deleteHero(hero.id).subscribe();
  }
}
