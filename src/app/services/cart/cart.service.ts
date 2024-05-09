import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import {Product} from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private firestore: AngularFirestore) {
  }

  async addToCart(userId: string, product: any): Promise<void> {
    await this.firestore.collection('users').doc(userId).collection('cart').doc(product.id).set(product);
  }

  async removeFromCart(userId: string, productId: string): Promise<void> {
    await this.firestore.collection('users').doc(userId).collection('cart').doc(productId).delete();
  }

  getCart(userId: string) {
    return this.firestore.collection('users').doc(userId).collection('cart').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Product;
          const documentId = a.payload.doc.id;
          return {documentId, ...data};
        }))
      );
  }
}
