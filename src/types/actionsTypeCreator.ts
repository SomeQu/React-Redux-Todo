import { ImarkCompleteAction, 
        ImarkIncompleteAction, 
         IdeleteTodoAction } from "./actionsType"

export type markCompleteActionCreator = (todo:string) => ImarkCompleteAction;

export type markIncompleteActionCreator = (todo:string) => ImarkIncompleteAction;

export type deleteTodoActionCreator = (todo:string) => IdeleteTodoAction;