import { ChangeDetectorRef } from "@angular/core";
import { HeroService } from "../../services/hero-service/hero.service";
import { Heroes } from "./heroes";
import { of } from "rxjs";
import { Ihero } from "../../models/ihero";

describe('heroes component', () => {
  let mockHeroService:jasmine.SpyObj<HeroService>,mockCDR:jasmine.SpyObj<ChangeDetectorRef>
  let component:Heroes
  let mockHeroes:Ihero[]
  beforeAll(()=>{
    mockHeroes=[
      {id:100,name:"super man",strength:10},
      {id:200,name:"bat man",strength:40},
    ]
     mockHeroService=jasmine .createSpyObj(["addHero","deleteHero","getHeroes"])
     mockHeroService.getHeroes.and.returnValue(of(mockHeroes))
     mockCDR=jasmine .createSpyObj(["detectChanges"])
    component= new Heroes(mockHeroService,mockCDR)
  })
    it('after ngOninit, heroes array should be set', () => {
      // expect(false).toBeTrue();
      component.ngOnInit()

      expect(mockHeroService.getHeroes).toHaveBeenCalled()
      expect(mockCDR.detectChanges).toHaveBeenCalled()
      expect(component.heroes).toHaveSize(mockHeroes.length)
  });
});


