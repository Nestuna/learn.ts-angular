import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { Hero } from '@core/models/hero';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
      ],
      providers: [HeroService],
    });

    service = TestBed.inject(HeroService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getHeroes should return a non empty list', (done) => {
    service.getHeroes().subscribe((heroes: Hero[]) => {
      expect(heroes.length).toBeGreaterThan(0);
      done();
    });
  });
});
