import { firebaseAuth, firebaseDb, pGoogle } from "src/boot/firebase";
import { Loading, Notify, QSpinnerFacebook } from "quasar";

function shuffle(array) {
  let current = array.length, random;
  while (0 !== current) {
    random = Math.floor(Math.random() * current);
    current--;

    [array[current], array[random]] = [array[random], array[current]];
  }
  return array;
}

export function filterAddAll({ getters, commit }) {
  // Add all cards
  const allCards = getters.getCards;
  commit("setFilter", Object.keys(allCards));
  // Optional: Include all custom cards
}
export function handleAuthStateChanged({ commit, dispatch, getters }) {
  dispatch("retrieveCards");
  // For custom cards, idea:
  // If user is logged in, append their cards to the cards object in state
  // If user is logged out, remove cards from state with property custom:true
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // // User is logged in
      const userId = firebaseAuth.currentUser.uid;
      firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
        let userDetails = snapshot.val();
        if (userDetails) {
          // If user exists in RDB, use their filter from the database
          commit("setFilter", userDetails.filter);
        } else {
          // If user does not exist yet in RDB, set them under user/${userId}
          //   with both their email and a default filter
          firebaseDb.ref("users/" + userId).set({
            email: user.email,
            filter: getters.getDefaultFilter
          });
          commit("setFilter", getters.getDefaultFilter);
        }
        commit("setCurrentUser", {
          email: user.email,
          userId
        });
      });
    } else {
      // User is logged out
      commit("setCurrentUser", {});
    }
  });
}
export async function retrieveCards({ commit, dispatch, getters }) {
  Loading.show({
    spinner: QSpinnerFacebook
  });
  await firebaseDb.ref("cards").once("value", (snapshot) => {
    let cards = snapshot.val();
    commit("setCards", cards);
    commit("setFilter", getters.getDefaultFilter);
    // dispatch("filterAddAll");
    dispatch("shuffleCrossroads");
  });
  Loading.hide();
}
export function showNextCard({ getters, commit }) {
  /* Shows next card if we are not at the end */
  const max = getters.getFilter.length - 1;
  const counter = getters.getCounter;
  if (counter < max) {
    commit("setCounter", counter + 1);
  }
}
export function showPrevCard({ getters, commit }) {
  /* Shows previous card if we are not at the beginning */
  const counter = getters.getCounter;
  if (counter > 0) {
    commit("setCounter", counter - 1);
  }
}
export function shuffleCrossroads({ getters, commit }) {
  /* Shuffles deck and sets counter to 0 */
  const filter = shuffle([...getters.getFilter]);
  commit("setFilter", filter);
  commit("setCounter", 0);
}
export function toggleFilter({ getters, commit }, { value, key }) {
  let filter = [...getters.getFilter];
  const index = filter.indexOf(key);
  if (value && index === -1) {
    filter.push(key);
  } else if (!value && index !== -1) {
    filter.splice(index, 1);
  }
  commit("setFilter", filter);
  const userId = getters.getCurrentUser.userId;
  if (userId) {
    firebaseDb.ref("users/" + userId).update({
      filter: filter
    });
  }
}
export function userLogin({ getters }) {
  firebaseAuth.signInWithRedirect(pGoogle)
    .then(() => {
      firebaseAuth.getRedirectResult()
        .then((result) => {
          console.error("result:", result);
          // // If userId is not in RDB, add to RDB
          // const userId = firebaseAuth.currentUser.uid;
          // firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
          //   let userDetails = snapshot.val();
          //   if (!userDetails) {
          //     let email = result.additionalUserInfo.profile.email;
          //     firebaseDb.ref("users/" + userId).set({
          //       email,
          //       filter: Object.keys(getters.getCards)
          //     });
          //   }
          // });
        })
        .catch(error => {
          console.error(error);
          // Display the error to the user
          // let notifyObj = { type: "negative", message: error.message }
          // Notify.create(notifyObj);
        });
    });
  // firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     // console.error(error);
  //     let notifyObj = { type: "negative" }
  //     switch(error.code) {
  //       case "auth/user-not-found":
  //         notifyObj.message = "Unregistered email";
  //         break;
  //       case "auth/wrong-password":
  //         notifyObj.message = "Incorrect password";
  //         break;
  //       default:
  //         notifyObj.message = error.message;
  //     }
  //     Notify.create(notifyObj);
  //   });
}
export function userLogout({}, payload) {
  firebaseAuth.signOut();
}
// export function userRegister({ getters }, payload) {
//   firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
//     .then(response => {
//       console.log(response);
//       const userId = firebaseAuth.currentUser.uid;
//       firebaseDb.ref("users/" + userId).set({
//         email: payload.email,
//         username: payload.username,
//         filter: Object.keys(getters.getCards)
//       });
//     })
//     .catch(error => {
//       console.error(error.message);
//       let notifyObj = { type: "negative", message: error.message }
//       Notify.create(notifyObj);
//     });
// }
