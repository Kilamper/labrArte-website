import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  constructor(private firestore: AngularFirestore) {
  }

  loadContent(url: string): any {
    return this.firestore.collection<any[]>(url).valueChanges();
  }
}
