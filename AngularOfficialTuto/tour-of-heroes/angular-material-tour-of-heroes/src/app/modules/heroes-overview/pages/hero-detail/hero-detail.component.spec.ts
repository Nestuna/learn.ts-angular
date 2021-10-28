import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, Observer, of } from 'rxjs';
import { Hero } from '@core/models/hero';
import { HeroService } from '@core/services/hero.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

let mockData = { id: 0, name: 'Dr Nice', age: 23, power: 'Invisible' };

class MockHeroService {
  getHero() {
    return new Observable((subscriber: Observer<Hero>) => {
      subscriber.next(mockData);
    });
  }
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: HeroService, useClass: MockHeroService },
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    router = TestBed.inject(Router)
    route = TestBed.inject(ActivatedRoute)
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('0');

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hero data', () => {
      expect(component.hero).toEqual(mockData)
  })
});
