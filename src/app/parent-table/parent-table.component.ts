import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, Input, TemplateRef } from '@angular/core';
import { ItemDefDirective } from '../itemDef.directive';

@Component({
  selector: 'app-parent-table',
  templateUrl: './parent-table.component.html',
  styleUrls: ['./parent-table.component.scss'],
  imports:[NgTemplateOutlet]
})
export class ParentTableComponent  {

  @Input() data: any[] = [];
  template = contentChild.required(ItemDefDirective, { read: TemplateRef });

}
