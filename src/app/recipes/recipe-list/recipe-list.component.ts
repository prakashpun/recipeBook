import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'What a test1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Artichoke_Stuffed_Tomato_%285052814731%29.jpg/800px-Artichoke_Stuffed_Tomato_%285052814731%29.jpg'),
    new Recipe('Test Recipe2', 'What a test2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg/800px-Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
