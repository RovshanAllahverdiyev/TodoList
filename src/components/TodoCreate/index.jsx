import { useContext ,useState } from "react";
import { Checkbox } from "../Checkbox";
import style from './todoCreate.module.scss';

export const TodoCreate = () => {
    const [done, setDone] = useState(false) 
    const [title, setTitle] = useState('')

    const {add} = useContext(Todo);

    return( 
        <div className={style.create}>
            <Checkbox 
                checked={done}
                onClick={() => {
                    setDone((prev) => !prev)
                }}
            />

            <input 
            type="text" 
            className={style.crate__input}    
            value={title}
            placeholder='Create a new todo...'
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            onKeyDown={(e) => {
                if(e.code === 'Enter') {
                    add(title,done)
                    setDone(false)
                    setTitle('')
                }
            }}
            />                         
      </div>
    )
}