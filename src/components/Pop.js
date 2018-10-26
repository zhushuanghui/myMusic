import React, {Component} from 'react';
//import {} form 'react-motion';
 class Pop extends Component {
    constructor() {
        super()

    }


    render() {
        const pop=this.props.pop;
        return (
            <div className={pop?'pop-box  pop-trans':'pop-box'}  >
                <div className="pop-top"></div>
                <div className="pop-bottom"></div>
            </div>
        )
    }
}
export default Pop;