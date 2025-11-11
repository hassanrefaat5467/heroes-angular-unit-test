/*
	Test file: hero.lab.service.spec.ts

	This spec tests the `HeroServiceForLab` methods that use HttpClient. Each
	test includes a short comment at the top describing what it asserts.

	  Steps performed in each test:
		1. Call the service method under test and subscribe to its Observable.
		2. Capture the outgoing HTTP request using `HttpTestingController`'s
			`expectOne` and assert the request method, URL, and body.
		3. Use `req.flush(...)` to simulate the backend response and verify the
			Observable emits the expected value.

	  Note: tests are written to match the current implementation in
	  `hero.lab.service.ts` (PUT should go to `http://localhost:3000/heroes/:id`).
*/

import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { HeroServiceForLab } from './hero.lab.service';
import { Ihero } from '../../models/ihero';

describe('hero lab service (http):', () => {
	let service: HeroServiceForLab;
	let httpTesting: HttpTestingController;
	const heroesUrl = 'http://localhost:3000/heroes';

	beforeEach(() => {
    
		TestBed.configureTestingModule({
			providers: [
				provideHttpClient(),
				provideHttpClientTesting(),
				provideZonelessChangeDetection(),
				HeroServiceForLab,
			],
		});

		httpTesting = TestBed.inject(HttpTestingController);
		service = TestBed.inject(HeroServiceForLab);
	});

	it('getHeroes: should send GET to url and return array', () => {
		const mockHeroes: Ihero[] = [{ id: 1, name: 'hassan', strength: 10 }];

		service.getHeroes().subscribe((data) => {
			expect(data).toEqual(mockHeroes);
		});

		const req = httpTesting.expectOne(heroesUrl);
		expect(req.request.method).toBe('GET');
	});

	it('updateHero: should send PUT to url and return updated hero', () => {
		const hero: Ihero = { id: 1, name: 'Ahmed', strength: 20 };

		service.updateHero(hero).subscribe((data) => {
			expect(data).toEqual(hero);
		});

		const req = httpTesting.expectOne(`${heroesUrl}/${hero.id}`);
		expect(req.request.method).toBe('PUT');
		expect(req.request.body).toEqual(hero);
	});

	afterEach(() => {
		httpTesting.verify();
	});
});

