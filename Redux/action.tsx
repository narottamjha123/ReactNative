import { ADD_TO_LIST } from "./Constant"

export function addToList(items : any){
    return{
        type : ADD_TO_LIST,
        data : items
    }
}
