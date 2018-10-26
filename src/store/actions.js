import {isLoginApi} from '../assets/api';
import * as Types from './action-type';


let actions={
    isLogin(){
        return{type:Types.IS_LOGIN,payload:isLoginApi()}
    }
};


export default actions;