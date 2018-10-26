import React, {Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './common.css';
import Pop from './Pop';
class HeadBar extends Component {
    constructor(props) {
        super(props);
        this.state={pop:false}
    }

    handleClick=()=>(
        this.setState({pop:!this.state.pop})
    )

    render() {
        const activeStyle={
            color: "white"
          };
       
        return (
            <div className="header">
                <div className="left  icon iconfont icon-caidan" onClick={this.handleClick}></div>
                <Pop pop={this.state.pop}></Pop>
                {/* {this.state.pop? <Pop  pop={this.state.pop}/>:''} */}
                <div className="center icon">
                    <NavLink to="/search" className="c-icon iconfont icon-yinyue" activeStyle={activeStyle}></NavLink>
                    <NavLink to="/home" className="c-icon iconfont icon-wangyiyunyinle" activeStyle={activeStyle}></NavLink>
                    <NavLink  to="/search"  className=" c-icon iconfont icon-shipin" activeStyle={activeStyle}></NavLink>
                </div>
                <NavLink  to="/search" className=" right icon iconfont icon-sousuo"></NavLink>
            </div>
        )
    }

}
export default  withRouter(HeadBar);