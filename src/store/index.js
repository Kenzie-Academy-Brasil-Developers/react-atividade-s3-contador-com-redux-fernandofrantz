import { createStore, combineReducers } from "redux";

// Aqui importamos os nossos reducers, no caso temos apenas de counter
import reducerCounter from "./modules/counter/reducer";

// Aqui combinamos todos os reducers que importamos
const reducers = combineReducers({ result: reducerCounter });

// Por fim passamos esses reducers para o createStore
const store = createStore(reducers);

export default store;
