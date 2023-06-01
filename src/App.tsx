import React, { useRef } from 'react'
import { connect } from 'react-redux';
import {
       markComplete, 
       markIncomplete, 
       deleteTodo} from 'actions/actions'
import IStoreType from "types/types"
import AppPropTypes from './AppPropType'
import { 
  Button,
   Container,
    FormControl, 
    InputGroup, 
    ListGroup,
     ListGroupItem, 
   } from 'react-bootstrap';
const App:React.FC<AppPropTypes> = ({complete, incomplete, deleteTodo, markComplete, markIncomplete }) => {
  const input = useRef<HTMLInputElement>(null);

	const renderList = (type: "Complete" | "Incomplete") => {
		const looper = type === "Complete" ? complete : incomplete;
		return (
			<ListGroup variant="flush" className="m-2">
				<h3>{type}</h3>
				{looper.map((todo, index) => {
					return (
						<ListGroupItem
							key={index}
							variant={type === "Complete" ? "success" : "danger"}
							style={{ display: "flex", justifyContent: "space-between", alignItems:'center', fontSize:'32px' }}
						>
							<div>{todo}</div>
							<div>
								<Button
									className={`btn ${
										type === "Complete" ? "btn-warning" : "btn-success"
									} m-2`}
									onClick={() => {
										type === "Complete"
											? markIncomplete(todo)
											: markComplete(todo);
									}}
								>{type==='Complete' ? 'Undo' : 'Completed'}</Button>
								<Button
									className="btn btn-danger"
									onClick={() => deleteTodo(todo)}
								>Delete</Button>
							</div>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);
	};

	const addTodo = () => {
		if (input.current && input.current.value[0] !==' ' ){
			const val = input.current.value;
			input.current.value = "";
			markIncomplete(val);
		}
	};

	return (
		<Container>
	<InputGroup className="m-3">
				<FormControl placeholder="Todo" ref={input} />
				<InputGroup>
					<Button className='mt-2' variant="secondary" onClick={() => addTodo()}>
						
						Add TODO
					</Button>
				</InputGroup>
			</InputGroup>
			{renderList("Incomplete")}
			{renderList("Complete")}
		</Container>  
	);
};

const mapState=(state:IStoreType)=>{
  return{
     complete: state.complete,
      incomplete: state.incomplete
  }
}
export default connect(mapState, {
  deleteTodo,
  markComplete,
  markIncomplete
})(App)