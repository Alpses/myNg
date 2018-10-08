import { Directive , HostBinding , Input } from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class GreetDirective {
  @Input() greet:string ;
  @HostBinding() get innerText(){
    return this.greet ;
  }
  constructor() { }

}
