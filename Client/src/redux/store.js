import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
// Permite utilizar "REACT-REDUX":
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    // Permite hacer peticiones asíncronas:
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;