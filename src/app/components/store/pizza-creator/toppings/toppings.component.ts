import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {
@Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }
  addTopping() {
    console.log("added topping to pizza");
  }
}
