import {Injectable} from '@angular/core';
import {Animal} from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() {
  }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name != a.name);
  }

  add(animals: Animal[], n: string, t: string, a: number) {
    return animals.push({name:n, type: t, age: a});
  }
}
