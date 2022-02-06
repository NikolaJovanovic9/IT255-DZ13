import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-macbook-search',
  templateUrl: './macbook-search.component.html'
})
export class MacbookSearchComponent implements OnInit {

  @Input() macbookName: string; // for search (filter pipe)

  @Output() myChangemacbookName: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.myChangemacbookName.emit({ value: this.macbookName });
  }

}
