import {GET_ITEMS, GET_ITEMS_ERROR, SELECTED_ITEM} from  "../action";
// import {CarState } from '../type'
import {foodItemProps} from "../type";

// export interface CarProps{
//     cars: CarState
// }


export type ActionProps={
type: string,
payload:any,
items:foodItemProps,
error:string,
id:string
}

const initialState ={
 items:[],
 item:{},
error:null

}



const AddItemReducer = (state=initialState, action:ActionProps)=>{
    switch(action.type){
           
        case GET_ITEMS:
            return{
           ...state,
           items:action.payload,
           error:null
            }

        // case SELECTED_ITEM:
        //         // const {item, items} =action.payload
        //         console.log(state, 'redux')
        // return{
        //     ...state,
        //     items:state.items
        // }
        case GET_ITEMS_ERROR:
            return{
            ...state,
            error:true
         }
         
        default:
            return state
    }
}


export default AddItemReducer;