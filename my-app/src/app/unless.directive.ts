import { Directive ,Input, TemplateRef , ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set condition(newCondition:Boolean){
    if(!newCondition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }
  constructor(private viewContainer:ViewContainerRef,private templateRef:TemplateRef<any>) { }

}
