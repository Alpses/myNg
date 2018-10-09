import { Component ,TemplateRef,ViewContainerRef,ViewChild,AfterViewInit ,ElementRef} from '@angular/core';
interface Address{
  province:string;
  city:string;
}
interface Description{
  color:string;
  text:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tpl') tplRef:TemplateRef<any>;
  // title = 'Special Clock';
  // description = {
  //   color:'Blue',
  //   text:'Nice'
  // }
  // address={
  //   province:'福建',
  //   city:'厦门'
  // }
  title:string;
  address:Address;
  description:Description;
  showSkills:boolean;
  skills:string[];
  private context:any;
  constructor(private vcRef:ViewContainerRef ,private elementRef:ElementRef){
    this.title = 'My o\'Clock';
    this.address = {
      province:'福建',
      city:'厦门'
    };
    this.description = {
      color:'Blue',
      text:'Nice'
    }
    this.showSkills = true ;
    this.skills = [
      'Angular 1.x',
      'Angular 2.x',
      'Angular 4.x',
      'Angular 6.x',
    ];
    this.context={
      message:"设置~~~~~~设置",
      message2:'Do it!',
      $implicit:"使用硬件加速模式（如果可用）"
    }
  }
  ngAfterViewInit(){
    this.vcRef.createEmbeddedView(this.tplRef);// 被追加在最下面
    console.log('NativeElement',this.elementRef.nativeElement.querySelector('div'));
  }
  toogleSkills(evt:any){
    console.log('When Clicked',evt);
    evt.stopPropagation();
    this.showSkills = !this.showSkills ;
  }
}
