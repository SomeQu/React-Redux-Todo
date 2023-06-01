export interface ImarkCompleteAction{
    type: "MARK_COMPLETE";
    todo: string;
}
export interface ImarkIncompleteAction{
    type: "MARK_INCOMPLETE";
    todo: string;
}
export interface IdeleteTodoAction{
    type: "DELETE_TODO";
    todo: string;
}