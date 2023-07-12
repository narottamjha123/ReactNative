import { ADD_TO_LIST } from "./Constant";

const InitialState = [];

export const reducer = (state = InitialState , action) => {
         switch(action.type)
         {
              case ADD_TO_LIST :
                return [
                   ...state,
                   action.data
                ]
                default:
                    return state
         }
}