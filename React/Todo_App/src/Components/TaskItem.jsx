export function TaskItem({ id, isCompleted, title, onChange, onClick}) {
    return <li key={id}>
        <label>
            <input type="checkbox"
                checked={isCompleted}
                onChange={e => onChange(id, e.target.checked)}
            />
            {isCompleted? <s>{title}</s>: title}
        </label>
        <button className="btn-danger btn"
            onClick={() => onClick(id)}
        >Delete</button>
    </li>
}