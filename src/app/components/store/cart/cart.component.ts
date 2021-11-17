import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  @Input() productItem!: Product
  cartTotal:number =0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any) => {
     this.addProductToCart(product)


    })

    this.msg.getOrderItem().subscribe((product:any) =>{
      this.removeFromCart(product)
    })


  }



removeFromCart(product: Product) {

  let index = this.cartItems.indexOf(product)

    this.cartItems[index].qty --

  this.cartTotal = 0
this.cartItems.forEach(item => {
  this.cartTotal += (item.qty * item.productPrice)

})
}

  addProductToCart(product: Product) {

    let productExists = false

    for(let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
         this.cartItems[i].qty ++
         productExists = true
         break;
      }}

    if(!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.smallPrice,
        qty: 1
      })
    }

this.cartTotal = 0
this.cartItems.forEach(item => {
  this.cartTotal += (item.qty * item.productPrice)
})

    }
  }
