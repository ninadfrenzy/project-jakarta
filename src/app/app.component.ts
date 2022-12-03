import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-jakarta';
  item$: Observable<Item[]>;
  constructor(firestore: Firestore) {
    const collectionReference = collection(firestore, 'sample');
    this.item$ = collectionData(collectionReference) as Observable<Item[]>;
    this.item$.subscribe({
      next: (data) => {
        console.log(data);
        
      }
    })
  }
}
