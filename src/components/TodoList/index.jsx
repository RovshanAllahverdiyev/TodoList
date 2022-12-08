import { useContext } from "react"
import { map } from 'loadash';
import { Todo } from 'context';
import {FilterState} from '../../data';
import { TodoItem } from '../TodoItem'


export const TodoList = () => {
    const { todos, filterState, toggle, remove} = useContext(Todo)

    return ( 
        <>
            {map(todos.filter((todo) => {
                if(filterState === FilterState.ACTIVE) {
                    return todo.done === false;
                }
                if(filterState === FilterState.COMPLETED) {
                    return todo.done === true;
                }
                return
            }),
            ({ id, title, done}) => (
                <TodoItem
                    key={id}
                    title={title}
                    done={done}
                    toggle={() => toggle(id)}
                    remove={() => remove(id)}
                />
            )
            )}
        </>
    )
}