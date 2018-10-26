import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom';
import './index.css';
import './assets/reset.css';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './containers/App';
import HomeMusic from './containers/home-music/HomeMusic';
import Recommend from './containers/home-music/Recommend';
import Friends from './containers/home-music/Friends';
import Radio from './containers/home-music/Radio';
import Personal from './containers/personal-center/Personal';

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App>
        <Switch>
            <Route path="/home"  component={HomeMusic}/>
            <Route path='/home/recommend' exact={true} component={Recommend}/>
            <Route path='/home/friends' exact={true} component={Friends} />
            <Route path='/home/radio' exact={true} component={Radio}/> 
            <Route path="/personal" component={Personal} />
            <Route path="/"  exact={true} component={HomeMusic}/>
        </Switch>
    </App>
</Router></Provider>, document.getElementById('root'));
