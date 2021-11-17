import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [
    new Product(1,'Pepperoni','Delicious Pepperoni and cheese pizza.',10.00, 12.50,15.00,"https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt2094c59e43e6f946/60ce79bbe1b3f7481347ddb0/Pizza.jpg"),
    new Product(2, 'Meat Lovers', 'Pepperoni, Sausage, and Bacon pizza.',10.00,12.50,15.00,"https://www.caseys.com/medias/sys_master/images/hea/h41/8796494626846/8163_base-400x400/8163-base-400x400.png"),
    new Product(3,'Supreme','pepperoni, sausage, green pepper, mushrooms and onions.',10.00,12.50,15.00,"https://www.caseys.com/medias/sys_master/images/h47/h8b/8796496461854/8173_base-400x400/8173-base-400x400.png")

  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
