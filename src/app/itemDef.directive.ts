import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appItemDef]'
})
export class ItemDefDirective<T> {
  readonly templateRef = inject(TemplateRef<T>)
  readonly data = input<T[]>();
  constructor() { }

}
