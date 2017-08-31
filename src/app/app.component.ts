import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chats: FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase) {
        this.chats = af.list('/chats');
    }
}
