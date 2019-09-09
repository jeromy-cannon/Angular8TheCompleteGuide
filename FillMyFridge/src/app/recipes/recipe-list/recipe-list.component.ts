import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // https://elavegan.com/gluten-free-vegan-gnocchi-recipe/
  recipes: Recipe[] = [
    new Recipe(
      'Gluten-Free Vegan Gnocchi',
      'Easy Homemade Recipe',
      'https://elavegan.com/wp-content/uploads/2019/01/Homemade-gluten-free-vegan-gnocchi-with-roasted-chickpeas-spinach-and-cheese-sauce-in-a-black-pan.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
