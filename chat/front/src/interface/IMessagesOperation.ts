import {Message} from '../model/message.model';

interface IMessagesOperation extends Function {
  (message: Message[]): Message[];
}
