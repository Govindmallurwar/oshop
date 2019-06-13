import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 
  constructor(private db: AngularFireDatabase) { }

  updateProduct(id, product) {
    this.db.object('/products/'+id).update(product);
  }
  create(product) {
    this.db.list('/products').push(product);
  }
  getAll() {
    return this.db.list('/products');
  }

  get(productId) {
   return this.db.object('/products/'+productId);
  }
  delete(id) {
    return this.db.object('/products/'+id).remove();
  }
}
