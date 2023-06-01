import {complete, incomplete} from './types/types'
import {deleteTodoActionCreator, markCompleteActionCreator,markIncompleteActionCreator} from './types/actionsTypeCreator'
interface IAppPropType{
 complete: complete;
 incomplete:incomplete;
 deleteTodo: deleteTodoActionCreator;
 markComplete: markCompleteActionCreator;
 markIncomplete:markIncompleteActionCreator;
}
export default IAppPropType;