import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Hero } from "./hero";
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from "@angular/platform-browser";
describe('hero component:', () => {
  let component:Hero,fixture:ComponentFixture<Hero>
  beforeEach(()=>{

    //1
    TestBed.configureTestingModule({
      imports:[
        Hero
      ],
      providers:[
         provideZonelessChangeDetection()
      ]
    })
    //2
    fixture= TestBed.createComponent(Hero)
   //3
    component=fixture.componentInstance
   
  })
    it('after passing hero value should renter it in template', () => {
      component.hero={id:10,name:"Roqaia",strength:1000}
      fixture.detectChanges()
      //access template (span)
        //1
    let span=  fixture.debugElement.query( By.css(".badge") )
      //assert span
    expect(span.nativeElement.textContent).toBe("10");
      //2
     let div= fixture.nativeElement.querySelector("div")
     expect(div.textContent).toContain("Roqaia")
  });
});

