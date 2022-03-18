# palavra-quadrada
This is a daily word game in two dimensions. It's a brazilian version of the game [Square Word](https://squareword.org/), which is based on the famous [Wordle](https://www.nytimes.com/games/wordle/index.html).
The word list is based on this [dictionary collection](https://github.com/fserb/pt-br).

## Check it!
The beta version of the game is available to [play here](https://palavra-quadrada.web.app/)!

## Dependencies
### Quasar
[Quasar](https://quasar.dev/) is the library used on this project to build the UI following the Material Guidelines.
### Firebase
After each game, a list with the guesses made by the player is stored on the [firestore database](https://firebase.google.com/docs/firestore). It's anonymous data and will be used only for statistical purposes.

## Project setup
This project was develop in Vuejs using Typescript. The Vue's reference documentation can be found [here](https://vuejs.org/guide/quick-start.html).

### Installing dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
