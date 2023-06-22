console.log(`-----------------------------`);

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}

// const initalState = {
//   numOfCakes: 10,
//   numOfIceCream: 10,
// };

// const reducer = (state = initalState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICE_CREAM:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeInitialState = {
  numOfCakes: 10,
};

const iceCreamInitialState = {
  numOfIceCream: 10,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));
// console.log("🚀 ~ store:", store.getState());

const unsubscribe = store.subscribe(() =>
  //   console.log(`updated state`, store.getState())
  {}
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// unsubscribe();

console.log(`-----------------------------`);
