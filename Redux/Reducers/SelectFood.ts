import {SELECTED_ITEM} from  "../action";
// import {CarState } from '../type'
import {foodItemProps, foodProps, listProps} from "../type";

// export interface CarProps{
//     cars: CarState
// }


export type SelectedProps={
type: string,
payload:any,
selected:listProps
}

const initialState ={
 item:{},
error:null

}



const SelectedReducer = (state=initialState, action:SelectedProps)=>{
    switch(action.type){
      case SELECTED_ITEM:
        return{
            ...state,
            item:action.payload
        }
          
         
        default:
            return state
    }
}


export default SelectedReducer;