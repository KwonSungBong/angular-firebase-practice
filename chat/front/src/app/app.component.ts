import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private data: Observable<Array<number>>;

  ngOnInit() {

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);

      setTimeout(() => {
        observer.next(43);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    let subscription = this.data.subscribe(
      value => console.log("value", value),
      error => console.log("error", error),
      () => console.log("finished")
    );

  }

}
