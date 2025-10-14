import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Counter } from "./counter";
import { provideZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('counter component: ', () => {
  let component:Counter,fixture: ComponentFixture<Counter>
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[Counter],
      providers:[
        provideZonelessChangeDetection()
      ]
    })
    fixture= TestBed.createComponent(Counter)
    component=fixture.componentInstance
  })
    it('component should render counter =0 in template', () => {
      fixture.detectChanges()
      //access p tag
      let p=fixture.nativeElement.querySelector("p")
      // in p tag 0
      expect(p.textContent).toContain("0")
      
  });
    it('component should render counter =1 in template after clicking inc. btn', () => {
      fixture.detectChanges()
      //access btn
     let btn= fixture.debugElement.query(By.css("#inc"))
      //fire event click
      btn.triggerEventHandler("click")
      btn.triggerEventHandler("click")
      btn.triggerEventHandler("click")
      fixture.detectChanges()
      //access p tag
      let p=fixture.nativeElement.querySelector("p")
      // in p tag 0
      expect(p.textContent).toContain("3")
      
  });
});
