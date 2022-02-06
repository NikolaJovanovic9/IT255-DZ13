import { Component, OnInit } from '@angular/core';
import { Macbook } from 'src/app/models/macbook';

@Component({
  selector: 'app-ng-macbook-for',
  templateUrl: './ng-macbook-for.component.html',
})
export class NgmacbookForDemoComponent implements OnInit {
  macbooks: Macbook[];

  constructor() {}

  ngOnInit(): void {
    this.macbooks = [
      {
        id: 1,
        name: 'MacBook Air',
        imageUrl: 'assets/img/1.jpeg',
        price: 1000,
        number: 12,
      },
      {
        id: 2,
        name: 'MacBook Pro',
        imageUrl: 'assets/img/2.jpeg',
        price: 1900,
        number: 2,
      },
      {
        id: 3,
        name: 'iMac',
        imageUrl: 'assets/img/3.jpeg',
        price: 2200,
        number: 20,
      }
    ];
  }
}
