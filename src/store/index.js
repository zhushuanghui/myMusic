import {createStore,Middleware} from 'redux';
import reducer from './reducer';

let store=createStore(reducer);

export default store;