import { createStore } from "redux";

import rootreducer from "./reducers/index";

const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular.
// Redux provides a solid, stable, and mature solution to managing state in your React application.



// Store

// This single Central Store stores the entire state (or global state) of the application. If you want to access specific state values you can do so by connecting or subscribing a component to the store.

// Actions

// An Action is simply an information package with a type (or unique description) which may or may not contain a payload.

// Actions are actually just the delivery boys, they don’t update the state in the store.This is handled by the Reducers.Typically you have multiple reducers which you will combine and end up with a root one which is directly connected to the store.They receive the Actions and handle them based on their description.Reducers receive the Actions and the old state as input and then produces the new updated state.They are pure synchronous functions with no side effects.

// Reducers receive the Actions and the old state as input and then produces the updated state…

// redux tunk
// Kishori Tutorials - cannel

// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions,

// Thunk middleware for Redux
// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

// With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action.Middleware extends the store's abilities, and lets you write async logic that interacts with the store.



// npm install redux - thunk

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
