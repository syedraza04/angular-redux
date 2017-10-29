import { ActionReducerMap} from "@ngrx/store";
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'
import * as fromAuth from '../auth/signin/store/auth.reducer'

export interface AppState{
    shoppingList:fromShoppingList.State,
    auth:fromAuth.State
}

export const reducers:ActionReducerMap<AppState> = {
    shoppingList:fromShoppingList.shoppingListReducer,
    auth:fromAuth.authenticationReducer
};