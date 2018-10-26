import React, {Component} from 'react';
import {Carousel} from 'antd';
// import 'antd/lib/carousel/style';
import 'antd/dist/antd.css'

class Friends extends Component {
    constructor() {
        super()

    }

    onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    render() {
        return (
            <div className="friends">
                {/* <div className="carousel-bg"> */}
                {/* </div> */}
                {/* <Carousel afterChange={this.onChange} dots={true}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Carousel> */}

                friends1232
            </div>
        )
    }
}
export default Friends;