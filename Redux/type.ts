export interface foodProps{
    idCategory:string,
    strCategory:string,
    strCategoryThumb:string,
    strCategoryDescription:string
    selected?:boolean
}


export type listProps={
    item:foodProps
}



export type foodItemProps ={
    items?:foodProps[]
    error?:string
}



export type foodListProps ={
    items:foodProps[]
}


export type listMenuProps ={
    strMeal:string,
    strMealThumb:string,
    idMeal:string,
}

export interface FoodMenuProps{
menu:listMenuProps
}

export type MenuListProps ={
    menu:FoodMenuProps[]
}

export type AddCart={
    carts:FoodMenuProps
}