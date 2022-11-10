import {GET_MENU_LIST} from  "../action";
// import {CarState } from '../type'
import {MenuListProps} from "../type";

// export interface CarProps{
//     cars: CarState
// }


export type MenuActionProps={
type: string,
payload:any,
menu:MenuListProps,
}

const initialState ={
 menu:[],
}



const MenuList = (state=initialState, action:MenuActionProps)=>{
    switch(action.type){
         
        case GET_MENU_LIST:
            return{
           ...state,
           menu:action.payload,
            }
         
        default:
            return state
    }
}


export default MenuList;