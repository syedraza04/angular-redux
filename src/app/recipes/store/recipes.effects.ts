import {Injectable} from "@angular/core";
import {Effect, Actions} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom'
import * as RecipeActions from '../store/recipes.actions'
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Recipe} from "../recipe.model";
import {Store} from "@ngrx/store";
import * as fromRecipe from '../store/recipes.reducers'

@Injectable()

export class RecipeEffects{

  @Effect()
    recipeFetch=this.actions$
      .ofType(RecipeActions.FETCH_RECIPES)
      .switchMap(
        (action:RecipeActions.Fetchrecipes)=> {
          return this.httpClient.get<Recipe[]>('https://ng-recipe-book-b1ee0.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
          })
        })
      .map(
        (recipes) => {
          recipes = recipes||[];
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
              }
            }
            return {
              type:RecipeActions.SET_RECIPES,
              payload:recipes
            };
          }
        );

  @Effect({dispatch:false})
    recipeStore=this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .withLatestFrom(this.store.select('recipes'))
      .switchMap(
          ([action, state])=>{
              const req = new HttpRequest('PUT', 'https://ng-recipe-book-b1ee0.firebaseio.com/recipes.json',state.recipes,{reportProgress: true});
              return this.httpClient.request(req);
          }
      );

  constructor(
      private actions$:Actions,
      private httpClient:HttpClient,
      private store:Store<fromRecipe.FeatureState>  ){}
}





