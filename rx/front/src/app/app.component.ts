import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {UsersService} from '../service/users.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clickMessage: string;
  result = 'result';
  usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
    usersService.getCurrentUser(value => console.log(value))
  }

  onClickMe() {
    console.log(this.clickMessage);
    this.result = this.clickMessage;
  }

  newUser() {
    let user: User = new User("testId", "testUserName");
    this.usersService.setCurrentUser(user);
  }

  destoryUser() {
    this.usersService.setCurrentUser(null);
  }

  test() {

  }

}
