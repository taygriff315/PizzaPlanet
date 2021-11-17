

import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: Product[] =[]

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
