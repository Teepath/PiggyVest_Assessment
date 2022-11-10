import {ADD_CART} from  "../action";
// import {CarState } from '../type'
import {AddCart} from "../type";

// export interface CarProps{
//     cars: CarState
// }


export type CartActionProps={
type: string,
payload:any,
carts:AddCart
}

const initialState ={
 carts:[],
}



const CartReducer = (state=initialState, action:CartActionProps)=>{
    switch(action.type){
      case ADD_CART:

      let existingCart = state.carts.some(elem => elem === action.payload)
      if(existingCart){
        return{
            ...state,
            carts:existingCart
        }
      }else{
        return{
            ...state,
            carts:[...state.carts, action.payload]
        }
      }
      
          
         
        default:
            return state
    }
}


export default CartReducer;