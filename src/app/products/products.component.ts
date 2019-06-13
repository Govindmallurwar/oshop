import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
produtcs$;
  constructor(private productService:ProductService) { 
  this.produtcs$=productService.getAll();
  }


}
