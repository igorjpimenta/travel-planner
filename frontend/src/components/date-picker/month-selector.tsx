import { months } from "./utils"

interface MonthSelectorProps {
  currentMonth: number
  onSelectMonth: (month: number) => void
}

export function MonthSelector({ currentMonth, onSelectMonth }: MonthSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3 text-sm">
      {months.map((month, index) => (
        <div
          key={index}
          data-selected={currentMonth === index}
          className={`
            p-2 rounded border-2 border-transparent font-medium cursor-pointer flex justify-center
          hover:!bg-zinc-800 data-[selected=true]:hover:!text-zinc-100 data-[selected=true]:hover:!bg-transparent
          data-[selected=true]:bg-lime-300 data-[selected=true]:!text-lime-950 data-[selected=true]:border-lime-300
          `}
          onClick={() => onSelectMonth(index)}
        >
          {month.substring(0, 3)}
        </div>
      ))}
    </div>
  )
}
