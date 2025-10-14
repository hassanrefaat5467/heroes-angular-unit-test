import { MessageService } from "./message.service";

describe("message service:",()=>{
    it('add function:should add new msg', () => {
      let service=new MessageService()
      service.add("message 1")
    expect(service.messages).toHaveSize(1);
  });
    it('clear function:should remove all message form array', () => {
      let service=new MessageService()
      service.add("message 1")
      service.add("message 2")

      service.clear()
    expect(service.messages).toHaveSize(0);
  });
})