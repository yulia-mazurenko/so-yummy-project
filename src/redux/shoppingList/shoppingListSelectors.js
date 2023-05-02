export const selectShoppingList = state => state.shoppingList.shoppingList;

export const selectShoppingListIsLoading = state =>
  state.shoppingList.isLoading;
export const selectShoppingListError = state => state.shoppingList.error;
