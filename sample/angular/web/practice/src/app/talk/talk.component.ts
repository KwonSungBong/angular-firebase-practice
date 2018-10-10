import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any[]>;
  count: number;

  constructor(db: AngularFireDatabase) {
    this.count = 0;
    this.item = db.object('/item');
    this.items = db.list('/items');
    this.item.subscribe(data => {
      console.log("item", data);
    });
    this.items.subscribe(data => {
      console.log("items", data);
    });
    console.log("TSET", this.item);
  }

  ngOnInit() {
  }

  insert() {
    this.item.set({ name: "name"+this.count++ });
    this.items.push({ name: "name"+this.count++ });
  }

}
