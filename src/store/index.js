import { createStore, applyMiddleware } from 'redux';
// This middleware let's us see the state before and after, and also logs the action that was dispatched everytime:
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export default store;
