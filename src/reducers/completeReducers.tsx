import { Reducer } from "redux"; 
import { ImarkCompleteAction, ImarkIncompleteAction, IdeleteTodoAction } from "types/actionsType";
import { complete } from "types/types";

const initialState:complete = [];
const completeReducer:Reducer<complete,IdeleteTodoAction | ImarkCompleteAction | ImarkIncompleteAction> = (state=initialState, action) =>{
    switch (action.type) {

        case "MARK_COMPLETE":
            return [...state, action.todo ];

        case "MARK_INCOMPLETE":
        case "DELETE_TODO":

            return [...state.filter((todo)=>todo !==action.todo)]

        default: 
        return [...state]
    }
};

export default completeReducer