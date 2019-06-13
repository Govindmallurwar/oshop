import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$;
  product = {};
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    category: CategoryService,
    private productService: ProductService) {
    this.category$ = category.getCategory();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product) {
    if (this.id) { 
        this.productService.updateProduct(this.id,product);
    }
    else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

delete()
{
  if(!confirm('Are you sure want to delete this product..')) 
    return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
}

back(){
  this.router.navigate(['/admin/products']);
}
  ngOnInit() {
  }

}
