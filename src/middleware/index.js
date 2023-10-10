import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';
import checkAuth from './checkAuth';


export default applyMiddleware(thunk, logger);