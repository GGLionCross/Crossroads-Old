export function getCards(state) {
  return state.cards;
}
export function getDefaultFilter(state) {
  let defaultFilter = [];
  for (const [key, value] of Object.entries(state.cards)) {
    if (value.default) {
      defaultFilter.push(key);
    }
  }
  return defaultFilter;
}
export function getFilter(state) {
  return state.filter;
}
export function getFilteredCards(state) {
  let allCards = state.cards;
  let filter = state.filter;
  let filteredCards = [];
  for (const name of filter) {
    filteredCards.push(allCards[name]);
  }
  return filteredCards;
}
export function getCounter(state) {
  return state.counter;
}
export function getCurrentUser(state) {
  return state.currentUser;
}
export function isUserLoggedIn(state) {
  return !!state.currentUser.userId;
}
