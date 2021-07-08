import { firebaseAuth } from "src/boot/firebase";

function shuffle(array) {
  let current = array.length, random;
  while (0 !== current) {
    random = Math.floor(Math.random() * current);
    current--;

    [array[current], array[random]] = [array[random], array[current]];
  }
  return array;
}

export function registerUser({}, payload) {
  console.error("Registering User...");
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error.message);
    });
}
export function resetCrossroads ({ getters, commit }) {
  /* Shuffles deck and sets counter to 0 */
  let filteredCards = Object.values(getters.getCards).filter(card => card.use);
  commit('setFilteredCards', shuffle(filteredCards));
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
