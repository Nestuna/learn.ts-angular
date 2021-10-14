import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', age: 23, power: 'Invisible' },
      { id: 12, name: 'Narco', age: 42, power: 'Speed'},
      { id: 13, name: 'Bombasto', age: 32, power: 'Fly' },
      { id: 14, name: 'Celeritas', age: 42, power: 'Speed' },
      { id: 15, name: 'Magneta', age: 32, power: 'Fly' },
      { id: 16, name: 'RubberMan', age: 23, power: 'Invisible' },
      { id: 17, name: 'Dynama', age: 42, power: 'Speed' },
      { id: 18, name: 'Dr IQ', age: 65, power: 'Invisible' },
      { id: 19, name: 'Magma', age: 57, power: 'Speed' },
      { id: 20, name: 'Tornado', age: 20, power: 'Speed' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
