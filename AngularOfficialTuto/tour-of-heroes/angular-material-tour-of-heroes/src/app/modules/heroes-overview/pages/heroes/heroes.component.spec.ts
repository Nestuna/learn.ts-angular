import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '@core/services/hero.service';
import { COMPILER_OPTIONS } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Hero } from '@core/models/hero';

let mockData = [
  { id: 0, name: 'Dr Nice', age: 23, power: 'Invisible' }
];

class MockHeroService {
  getHeroes() {
    return new Observable((subscriber: Observer<Hero[]>) => {
      subscriber.next(mockData);
    });
  }
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ HeroesComponent ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get heroes data', () => {
    expect(component.heroes[0]).toBe(mockData[0]);
  })


});
