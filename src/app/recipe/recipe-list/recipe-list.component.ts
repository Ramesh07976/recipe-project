import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {



  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.initializeRecipe();
    this.getAllRecipes();
  }

  recipe: Recipes;
  initializeRecipe() {
    this.recipe = new Recipes("ramesh", "desc", "path");
  }


  recipes: Array<Recipes> = new Array();
  getAllRecipes()
  {
    this.recipeService.getRecipe().subscribe(
      (result:any) =>
      {
        this.recipes = result;
      },
      (error:any) =>{

      }
   
    );
  }

}
