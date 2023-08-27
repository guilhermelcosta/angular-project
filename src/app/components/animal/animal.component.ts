import {Component} from '@angular/core';
import {Animal} from '../../interfaces/Animal';
import {AnimalService} from '../../services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  name: string = '';
  type: string = '';
  age: number = 0;

  animals: Animal[] = [
    {name: 'Guilherme', type: 'Macaco', age: 26},
    {name: 'Lowrany', type: 'Onça', age: 23},
    {name: 'Beane', type: 'Ave', age: 20}
  ];

  animalDetails = '';

  constructor(private animalService: AnimalService) {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O animal tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animalService.remove(this.animals, animal);
    console.log('Classe');
  }

  addAnimal(name: string, type: string, age: number) {
    this.animalService.add(this.animals, name, type, age);
  }

}
