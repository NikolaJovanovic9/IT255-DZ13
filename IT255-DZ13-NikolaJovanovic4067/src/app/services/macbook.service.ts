import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Macbook } from '../models/macbook';

@Injectable({
  providedIn: 'root',
})
export class MacbookService {
  macbooks: Macbook[];

  private macbookSource = new BehaviorSubject<Macbook>({
    id: null,
    name: null,
    imageUrl: null,
    price: null,
  });
  selectedMacbook: Observable<Macbook> = this.macbookSource.asObservable();

  // for clear form
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
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

  // Pregled soba kroz poglede
  getMacbooks(): Observable<Macbook[]> {
    return of(this.macbooks);
  }

  addmacbook(macbook: Macbook) {
    this.macbooks.push(macbook);
  }

  updatemacbook(macbook: Macbook) {
    this.macbooks.forEach((curr, i) => {
      if (macbook.id === curr.id) {
        this.macbooks.splice(i, 1);
      }
    });
    this.macbooks.unshift(macbook);
  }

  deletemacbook(macbook: Macbook) {
    this.macbooks.forEach((curr, i) => {
      if (macbook.id === curr.id) {
        this.macbooks.splice(i, 1);
      }
    });
  }

  setFormmacbook(macbook: Macbook) {
    this.macbookSource.next(macbook);
  }

  clearState() {
    this.stateSource.next(true);
  }

  /**
   * Quantity instead of numberOfNights
   */
  getPrice(quantity: number, macbook: Macbook) {
    return quantity * macbook.price;
  }
}
