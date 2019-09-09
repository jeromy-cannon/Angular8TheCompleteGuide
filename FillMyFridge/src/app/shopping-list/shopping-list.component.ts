import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('potatoes, peeled and chopped (lbs)', 2.25),
    new Ingredient('chickpea flour (1.5-2 cups)', 2),
    new Ingredient('tapioca flour (cup)', 1),
    new Ingredient('sea salt (tsp)', 0.5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
