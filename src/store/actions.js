export function resetCrossroads (/* context */) {
  /* Shuffles deck and sets counter to 0 */
}
export function showNextCard({ getters, commit }) {
  /* Shows next card if we are not at the end */
  const max = getters.getFilteredCards.length - 1;
  const counter = getters.getCounter;
  if (counter < max) {
    commit('setCounter', counter + 1)
  }
}
export function showPrevCard({ getters, commit }) {
  /* Shows previous card if we are not at the beginning */
  const counter = getters.getCounter;
  if (counter > 0) {
    commit('setCounter', counter - 1)
  }
}
