import { NgTemplateOutlet } from '@angular/common';
import { Directive, inject, input, TemplateRef } from '@angular/core';

type ItemContext<T> = {
  $implicit: T;
}


@Directive({
  selector: '[appItemDef]'
})
export class ItemDefDirective<T> {
  readonly templateRef = inject(TemplateRef<ItemContext<T>>)
  readonly appItemDefData = input<T[]>();
  static ngTemplateContextGuard<T>  (dir:ItemDefDirective<T>,context: unknown): context is ItemContext<T> {
    return true;
  }

}
