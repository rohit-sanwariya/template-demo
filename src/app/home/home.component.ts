import { Component, OnInit } from '@angular/core';
import { ParentTableComponent } from '../parent-table/parent-table.component';
import { ItemDefDirective } from '../itemDef.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    ParentTableComponent,
    ItemDefDirective,
  ],
})
export class HomeComponent implements OnInit {
 items = [
   { id: 1, name: 'Item 1', description: 'Description for Item 1' },
   { id: 2, name: 'Item 2', description: 'Description for Item 2' },
   { id: 3, name: 'Item 3', description: 'Description for Item 3' },
   { id: 4, name: 'Item 4', description: 'Description for Item 4' },
   { id: 5, name: 'Item 5', description: 'Description for Item 5' },
   { id: 6, name: 'Item 6', description: 'Description for Item 6' },
 ]
  constructor() { }

  ngOnInit() {
  }

}
