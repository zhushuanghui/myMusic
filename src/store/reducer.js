import actions from './actions';
import { IS_LOGIN } from './action-type';

let initState={loginStatus:''};
 let reducer=(state=initState,actions)=>{
    switch(actions.type){
        case IS_LOGIN:
        return{...state,loginStatus:{...actions.payload}}
        
    }
return initState;
}

export default reducer;