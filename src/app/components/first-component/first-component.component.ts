import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  @Input() title!: string;

  pessoas = [{nome: "Guilherme", idade: 15}, {nome: "Rodrigo", idade: 13}, {nome: "Matheus", idade: 10}]

  constructor() {
  }
}
