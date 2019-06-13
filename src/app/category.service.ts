import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category$

  constructor(private db: AngularFireDatabase) {
  }
  save()
  {
    
  }
  getCategory()
  {
    return this.db.list('/category',{query:{
      orderByChild:'name'
    }});
  }
}