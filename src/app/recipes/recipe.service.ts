import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
     
    private recipes: Recipe[] = [
        new Recipe('Test Recipe1', 'What a test1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Artichoke_Stuffed_Tomato_%285052814731%29.jpg/800px-Artichoke_Stuffed_Tomato_%285052814731%29.jpg'),
        new Recipe('Test Recipe2', 'What a test2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg/800px-Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
