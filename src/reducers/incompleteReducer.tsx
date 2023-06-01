import { Reducer } from "redux"; 
import { ImarkCompleteAction, ImarkIncompleteAction, IdeleteTodoAction } from "types/actionsType";
import { incomplete } from "types/types";

const initialState:incomplete = [];

const incompleteReducer: Reducer<
	incomplete,
	IdeleteTodoAction | ImarkCompleteAction | ImarkIncompleteAction
> = (state = initialState, action) => {
	switch (action.type) {
		case "MARK_INCOMPLETE":
			return [...state, action.todo];
		case "DELETE_TODO":
		case "MARK_COMPLETE":
			return [...state.filter((todo) => todo !== action.todo)];
		default:
			return [...state];
	}
};

export default incompleteReducer;