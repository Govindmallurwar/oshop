import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {

  products:Product[];
  filtersProducts:any[];
  subscripation:Subscription;
  constructor(private productService:ProductService) {
    this.subscripation=productService.getAll().subscribe(products=>this.filtersProducts=this.products=products);
   }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscripation.unsubscribe();
  }


  filter(query:string)
  {
    this.filtersProducts=(query)?
    this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):this.products;
  }

}
