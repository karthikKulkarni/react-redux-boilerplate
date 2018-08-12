import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../app/reducers/index"; //Import the reducer

// Connect our store to the reducers

// export default createStore(reducers, applyMiddleware(thunk));

const middlewares = [thunk];
const enhancer = [];
enhancer.push(applyMiddleware(...middlewares));

//For react-native-debugger - https://github.com/jhen0409/react-native-debugger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(reducers, composeEnhancers(...enhancer));
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
export default store;
