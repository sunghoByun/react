import {useState} from "react";
import './StateTodo.css';
let maxId = 0;

export default function StateTodo() {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);
    const [desc, setDesc] = useState(true);
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };
    const handleClick = () => {
        setTodo([
            ...todo,
            {
                id: ++maxId,
                title,
                created: new Date(),
                isDone: false,
            }
        ])
    }

    const handleDone = e => {
        setTodo(todo.map(item => {
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }))
    };

    const handleDesc = e => {
        const sorted = [...todo];
        sorted.sort((m, n) => {
            if ((desc)) {
                return n.created.getTime() - m.created.getTime();
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        });

        setTodo(sorted);
        setDesc(!desc);
    };

    const handleDelete = e => {
        setTodo(todo.filter(item =>
            item.id !== Number(e.target.dataset.id)
        ));
    }
    return (
        <div>
            <label>
                해야 할 일 :
                <input type={'text'} name={"title"} value={title} onChange={handleChangeTitle} />
            </label>
            <button type={"button"} onClick={handleClick}>추가하기</button>
            <button type={"button"} onClick={handleDesc}>정렬({desc? '△':'▽'})</button>
            <hr/>
            <ul>
                {todo.map(item => (
                    <li key={item.id}
                        className={item.isDone? 'done':''}>
                        {item.title}
                        <button type={"button"} onClick={handleDone} data-id={item.id}>완료</button>
                        <button type={"button"} onClick={handleDelete} data-id={item.id}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};