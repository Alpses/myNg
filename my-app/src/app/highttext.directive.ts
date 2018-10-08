import { Directive,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighttext]'
})
export class HighttextDirective {
  @HostBinding() innerText = 'World Summit!'
  constructor() { }

}
