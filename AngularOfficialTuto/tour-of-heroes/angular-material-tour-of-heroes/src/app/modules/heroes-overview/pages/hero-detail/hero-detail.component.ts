import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HeroService } from '../../../../core/services/hero.service';
import { Hero } from '../../../../core/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  heroFormGroup: FormGroup = this.formBuilder.group({
    'name': '',
    'age': '',
    'power': ''
  });
  powers = ['Fly', 'Speed', 'Invisible']

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.heroService.getHero(id)
        .subscribe(hero => {
          this.hero = hero
          this.createForm()
        })
    } else {
      this.createForm()
    }
  }

  createForm(): void {
    if (this.hero) {
      this.heroFormGroup = this.formBuilder.group({
        ...this.hero
      });
    } else {
      this.heroFormGroup = this.formBuilder.group({
        'name': '',
        'age': '',
        'power': ''
      })
    }
  }

  onSubmit(): void {
    if (this.hero) {
      this.heroFormGroup.value['id'] = this.hero.id
      this.update(this.heroFormGroup.value)
    } else {
      this.add(
        this.heroFormGroup.value.name,
        this.heroFormGroup.value.age,
        this.heroFormGroup.value.power
      )
    }
  }


  private add(name: string, age: Number, power: string) : void {
    name.trim();
    if (!name) return;
    this.heroService.addHero({ name, age, power } as Hero)
      .subscribe(() => this.goBack())
  }

  private update(hero: Hero): void {
    if (hero) {
      this.heroService.updateHero(hero)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }

}
