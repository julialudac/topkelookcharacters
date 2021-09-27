import { createStore } from 'vuex'

let store = createStore({
  state: {
    characters: [
      {
        name: 'Willian',
        description: 'Willian is a tramp living in a trash can. He is known to be useless and disposable.',
        HP: 50,
        spellpoints: 0,
        attack: 1,
        defense: 1,
        speed: 3,
        nbpictures: 3
      },
      {
        name: 'Poubellos',
        description: 'Poubellos is an ordinary trash can with thin arms and eyes.',
        HP: 100,
        spellpoints: 0,
        attack: 1,
        defense: 70,
        speed: 3,
        nbpictures: 0
      },
      {
        name: 'Spiderball',
        description: 'Spiderballs like to surprise their preys by lurking and observing them, eventually jumping on them like ninjas. Yuck!',
        HP: 5,
        spellpoints: 0,
        attack: 3,
        defense: 3,
        speed: 80,
        nbpictures: 0
      }
    ]
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    }
  }
});

export default store;