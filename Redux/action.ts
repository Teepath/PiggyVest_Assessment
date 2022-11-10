import axios from 'axios';

export const GET_ITEMS ="GET_ITEMS";
export const GET_ITEMS_ERROR="GET_ITEMS_ERROR"
export const SELECTED_ITEM="SELECTED_ITEM"
export const GET_MENU_LIST="GET_MENU_LIST"
export const ADD_CART="ADD_CART";




export const getItemCastegories = ()=>async (dispatch:any)=>{
try{
    const {data} =await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php?limit=6');
    console.log(data, 'data item');
    const {categories} = data;

    dispatch({
        type:GET_ITEMS,
        payload:categories
    })
}catch(err){
    console.log(err, 'cant get item')
}
}

export const selectedFood = (id:any)=>async (dispatch:any, getState:any)=>{
    const items = getState().items.items

       items.filter((x:any)=> {
                if(x.idCategory === id){
                    x.selected = !x.selected;
                    console.log(x, 'This is the item')  
                        
    dispatch({
        type:SELECTED_ITEM,
        payload:x
    })

                }else{
                    x.selected = false
                  
                }
            })

 

}



export const handleMenuCategory = (str:string)=>async(dispatch:any)=>{
try{
    const {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`);
    console.log(data, 'data menu')
    const {meals} = data;
    console.log(meals, 'categories')
    dispatch({
        type:GET_MENU_LIST,
        payload:meals
    })
}catch(err){
console.log(err)
}
}

export const handleCart = (item:any)=>(dispatch:any)=>{

    dispatch({
        type:ADD_CART,
        payload:item
    })
}