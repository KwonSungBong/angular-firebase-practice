import {Message} from '../model/message.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class MessagesService {

  messages: Observable<Message[]> = new Observable<Message[]>();
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();

  constructor() {
    const initialMessages = [];
    //this.messages = this.updates.scan((messages: Message[],
    //                                   operation: IMessagesOperation) => {
    //  return operation(messages);
    //}, initialMessages);
  }

  addMessage(newMessage: Message) {
    this.updates.next( (messages: Message[]): Message[] => {
      return messages.concat(newMessage);
    });
  }

}

interface IMessagesOperation extends Function {
  (message: Message[]): Message[];
}
