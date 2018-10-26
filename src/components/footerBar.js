import React, {Component} from 'react';
import{Link} from 'react-router-dom';
// import { Carousel } from 'antd';
// import 'antd/dist/antd.css';

class FooterBar extends Component {
    constructor() {
        super();
    }

     onChange=(a, b, c)=> {
        console.log(a, b, c);
      }
    render() {
        return (
            <div className="footer">
                <Link to="/music" className="foot-song">
                {/* <Carousel afterChange={this.onChange}>          
  </Carousel> */}
                </Link>
                <Link to="/" className="foot-play iconfont icon-bofang"></Link>
                <Link to="/audio" className="foot-list iconfont icon-liebiao"></Link>
            </div>
        )
    }
}
export default FooterBar;