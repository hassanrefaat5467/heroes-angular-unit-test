/*
	Test file: messages.lab.spec.ts

	This spec uses a class-level testing approach to avoid template parsing
	because `messages.lab.html` in this repo is not valid Angular (it uses a
	pseudo-template syntax). The tests below instantiate `MessageService` and
	`MessagesForLab` directly and verify DI wiring and `add`/`clear` behaviour.

	Steps performed in each test:
	 1. Create a `MessageService` instance and (optionally) construct the
			component by passing the service in the constructor.
	 2. Manipulate the service (`add`, `clear`) and assert `messages` array
			contents and size.
*/

import { MessagesForLab } from './messages.lab';
import { MessageService } from '../../services/message/message.service';

describe('messages lab component (class-level):', () => {
	let messageService: MessageService;
	let component: MessagesForLab;

	beforeEach(() => {
		messageService = new MessageService();
		component = new MessagesForLab(messageService);
	});

	it('should have messageService injected', () => {
		expect(component.messageService).toBeDefined();
		expect(component.messageService).toBe(messageService);
	});

	it('messageService.add and clear should work', () => {
		expect(messageService.messages).toHaveSize(0);
		messageService.add('lab msg');
		expect(messageService.messages).toHaveSize(1);
		expect(messageService.messages[0].message).toBe('lab msg');
		messageService.clear();
		expect(messageService.messages).toHaveSize(0);
	});
});

