import { MessengerService } from 'src/app/services/messenger.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() cartItem: any

faTimes = faTimes;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleRemoveFromCart() {

    this.msg.sendOrderItem(this.cartItem)

  }

}
