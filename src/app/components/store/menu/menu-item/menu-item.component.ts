import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',

  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() productItem!: Product

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {

    this.msg.sendMsg(this.productItem)
  }

}
