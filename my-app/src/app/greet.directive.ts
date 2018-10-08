import { Directive , HostBinding , HostListener , Input 
, Attribute } from '@angular/core';

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
    console.dir(event);
  }
  constructor(@Attribute('author') public author:string) { 
    console.log('@Attribute:',author);
  }

}
