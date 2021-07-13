export function getCards(state) {
  return state.cards;
}
export function getFilteredCards(state) {
  return state.filteredCards;
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
