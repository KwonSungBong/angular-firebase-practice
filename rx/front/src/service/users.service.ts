import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UsersService {

  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }

  public getCurrentUser(callback): void {
    this.currentUser.subscribe(callback);
  }

}
