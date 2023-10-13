//Default is server side, onChange implies interaction on client side, this converts to a client component
"use client"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}
export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    return (
      <div className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={e => toggleTodo(id, e.target.checked)}
          //onChange implies interaction on client side, therefore this entire component must be converted to a client component
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
    )
  }