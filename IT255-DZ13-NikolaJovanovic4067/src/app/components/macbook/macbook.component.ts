import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { Macbook } from '../../models/macbook';
import { MacbookService } from '../../services/macbook.service';

@Component({
  selector: 'app-macbooks',
  templateUrl: './macbook.component.html'
})
export class MacbooksComponent implements OnInit {
  macbooks: Macbook[];

  @Input() macbookName: string; // for search (filter pipe)

  selectedmacbook: Macbook; // for populating form

  @Output() cleanSearchAfterDelete: EventEmitter<any> = new EventEmitter();

  constructor(private macbookService: MacbookService) {}

  ngOnInit(): void {
    console.log('ngOnInit()');
    // for clear
    this.macbookService.stateClear.subscribe((clear) => {
      if (clear) {
        this.selectedmacbook = {
          id: null,
          name: null,
          imageUrl: null,
          price: null,
        };
      }
    });

    // Pregled soba kroz poglede
    this.macbookService.getMacbooks().subscribe((macbooks) => {
      this.macbooks = macbooks;
    });
  }

  onSelect(macbook: Macbook) {
    this.macbookService.setFormmacbook(macbook);
    this.selectedmacbook = macbook;
  }

  onDelete(macbook: Macbook) {
    if (confirm('Are you sure?')) {
      this.cleanSearchAfterDelete.emit();

      this.macbookService.deletemacbook(macbook);
    }
  }

  buy(macbook: Macbook) {
    const quantity: number = +prompt('Quantity:');
    console.log(`Total price: ${this.macbookService.getPrice(quantity, macbook)}`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }

  ngDoCheck() {
    console.log('ngDoCheck()');
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }
}
