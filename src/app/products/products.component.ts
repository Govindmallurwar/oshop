import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productByCat$;
  produtcs: Product[]=[];
  filteredProducts:Product[]=[]
  category$;
  catery: string;
  constructor(route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService) {
    productService
    .getAll()
    .switchMap(product =>{ 
      this.produtcs = product as Product[]; 
      return route.queryParamMap}).subscribe(param => {
        this.catery = param.get('category');
        this.filteredProducts=(this.catery)?this.produtcs.filter(p=>p.category===this.catery):this.produtcs;
    });
    this.category$ = categoryService.getAll()
    this.productByCat$ = this.produtcs;
  }

  // filterByCategory(categoryName: String) {
  //   let self=this;
  //   this.produtcs.subscribe(function (data) {
  //     self.productByCat$= of(data.filter(d => {
  //       return d.category.toLowerCase() === categoryName.toLowerCase();
  //     }))
  //     console.log(self.productByCat$);
  //   });
  // }


}
