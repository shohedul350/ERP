import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {createBrowserHistory} from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from '../redux/reducers';


const history = createBrowserHistory()

const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
);
export { store, history };
