import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
     
    private recipes: Recipe[] = [
        new Recipe('Test Recipe1',
        'What a test1',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Artichoke_Stuffed_Tomato_%285052814731%29.jpg/800px-Artichoke_Stuffed_Tomato_%285052814731%29.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Test Recipe2',
        'What a test2',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg/800px-Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg',
        [
            new Ingredient('Buns', 3),
            new Ingredient('Meat', 2)])
      ];


    constructor(private slSerivce: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slSerivce.addIngredients(ingredients);
    }
}
