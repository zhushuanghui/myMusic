import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Recommend from './Recommend';
import Friends from './Friends';
import Radio from './Radio';
import "./index.css";
import {connect} from 'react-redux';
import actions from '../../store/actions';

 //@connect(state => ({...state.homeReducer}), actions)
class HomeMusic extends Component {
    constructor() {
        super()

    }
    render() {
        const activeStyle = {
            borderBottom: "1px solid #fff",
            color:"#fff",
            fontWeight: "bolder"
        };

        return (
            <div className="home-music">
                <div className="home-header">
                    <NavLink to='/home/recommend' className="bold recommend" activeStyle={activeStyle} replace>
                       推荐
                    </NavLink>

                    <NavLink to="/home/friends" className="bold friends" activeStyle={activeStyle} replace>
                       朋友
                    </NavLink>

                    <NavLink to="/home/radio" className="bold radio" activeStyle={activeStyle} replace>
                       电台
                    </NavLink>
                </div>
                <div className="home-content">
                <Switch>
                    <Route path='/home/recommend'  component={Recommend}/>
                    <Route path='/home/friends' component={Friends}/>
                    <Route path='/home/radio' component={Radio}/>
                </Switch>
                </div>
                

            </div>
        )
    }
}
 export default HomeMusic;