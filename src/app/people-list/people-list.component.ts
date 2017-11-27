import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">
      <a href="#" (click)="selectPerson(person)">
        {{person.name}}
      </a>
      </li>
    </ul>
    <section *ngIf="selectedPerson">
    <h2>You selected:  {{selectedPerson.name}}</h2>
    <h3>Description</h3>
    <p>
       {{selectedPerson.name}} weights  {{selectedPerson.weight}} and is  {{selectedPerson.height}} tall.
    </p>
  </section>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[];
  selectedPerson: Person;

  constructor(private peopleService: PeopleService) {
    this.people = peopleService.getAll();
  }

  ngOnInit() {}

  selectPerson(person){
    this.selectedPerson = person;
  }
}
