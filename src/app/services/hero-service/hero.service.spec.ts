import { TestBed } from '@angular/core/testing';
import { MessageService } from '../message/message.service';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('hero service:', () => {
  let mockMsgService: jasmine.SpyObj<MessageService>;
  let service:HeroService,httpTesting:HttpTestingController
  let heroesUrl = 'http://localhost:3000/heroes'
  beforeEach(() => {
    mockMsgService = jasmine.createSpyObj(['add']);
    TestBed.configureTestingModule({
      providers: [
        { provide: MessageService, useValue: mockMsgService },
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ],
    });
     httpTesting = TestBed.inject(HttpTestingController);
    service=TestBed.inject(HeroService)
  });
  it('getHero function: send get request to API and take res', () => {
    let mockRes={name:"Soah",id:23,strength:20}
    service.getHero(23).subscribe({next:(data)=>{
      expect(data).toEqual(mockRes)
    }})

   let testReq = httpTesting.expectOne(heroesUrl+"/23")
   expect(testReq.request.method).toBe("GET")

   testReq.flush(mockRes)
  });
});
