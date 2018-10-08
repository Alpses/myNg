import { Directive , HostBinding , HostListener , Input } from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class GreetDirective {
  @Input() greet:string ;
  @HostBinding() get innerText(){
    return this.greet ;
  }
  @HostListener('click',['$event']) 
  onclick(event){
    this.greet = 'Clicked!';
  }
  constructor() { }

}
