import { TaskItem } from "./TaskItem"

export default function TaskListItem({tasks, onChange, onClick}) {

    return <ul className="list">
        {tasks.length === 0 && <li>No tasks yet</li>}
        {tasks.map((task, index) => {
            return <TaskItem {...task} key={task.id} onChange={onChange} onClick={onClick}/>
        })}
    </ul>
}