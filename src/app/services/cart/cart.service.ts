import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private firestore: AngularFirestore) {
  }

  async addToCart(userId: string, product: any): Promise<void> {
    await this.firestore.collection('users').doc(userId).collection('cart').add(product);
  }
}
