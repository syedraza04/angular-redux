
import {Action} from "@ngrx/store";
import {Recipe} from "../recipe.model";

export const SET_RECIPES   = 'SET_RECIPES';
export const ADD_RECIPE    = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const STORE_RECIPES = 'STORE_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export class Setrecipes   implements Action {
    readonly type = SET_RECIPES;
    constructor(public payload:Recipe[]){}
}
export class Addrecipe    implements Action {
    readonly type = ADD_RECIPE;
    constructor(public payload:Recipe){}
}
export class Updaterecipe implements Action {
    readonly type = UPDATE_RECIPE;
    constructor(public payload:{index:number,updatedRecipe:Recipe}){}
}
export class Deleterecipe implements Action {
    readonly type = DELETE_RECIPE;
    constructor(public payload:number){}
}
export class Fetchrecipes  implements Action {
    readonly type = FETCH_RECIPES;
}
export class Storerecipes  implements Action {
    readonly type = STORE_RECIPES;
}

export type RecipeActions =
    Setrecipes   |
    Addrecipe    |
    Updaterecipe |
    Deleterecipe |
    Fetchrecipes  |
    Storerecipes