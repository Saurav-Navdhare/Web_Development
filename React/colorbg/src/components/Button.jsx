export default function Button({color, onClick, children}) {
  return (
    <button
    className="outline-none px-4 w-full rounded-full py-1 my-1"
    style={{ backgroundColor: color }}
    onClick={onClick}
    >
      {children}
    </button>
  )
}