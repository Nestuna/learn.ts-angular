import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { Hero } from '@core/models/hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#getHeroes sould return a non empty list', () => {
  //   service.getHeroes().subscribe((heroes: Hero[]) => {
  //     expect(heroes.length).toBeGreaterThan(0);
  //   })
  // })
});
