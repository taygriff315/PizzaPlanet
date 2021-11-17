import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  remove = new Subject()

  constructor() { }

  sendMsg(product:Product) {

    this.subject.next(product)

  }
  getMsg() {
    return this.subject.asObservable()
  }

  getOrderItem() {
    return this.remove.asObservable()
  }

  sendOrderItem(product:Product) {
    this.remove.next(product)
  }
}
