import { CalendarProps } from "./calendar"
import { isSameDay } from "./utils"

interface DayProps extends Pick<CalendarProps, 'onSelectDate' | 'onHoverDate'> {
  date: Date
  isSelected: boolean
  isInRange: boolean
  isRangeStart: boolean
  isRangeEnd: boolean
  isCurrentMonth: boolean
}

export function Day({
  date,
  isSelected,
  isInRange,
  isRangeStart,
  isRangeEnd,
  isCurrentMonth,
  onSelectDate,
  onHoverDate,
}: DayProps) {
  const isToday = isSameDay(new Date(), date)

  return (
    <div
      className={`
        p-0 m-0.5 flex justify-center items-center cursor-pointer text-sm font-medium antialiased
        ${isInRange ? 'mx-0 px-0.5 bg-zinc-800 rounded-none' : ''}
        ${isRangeStart ? 'rounded-l-full' : ''}
        ${isRangeEnd ? 'rounded-r-full' : ''}
      `}
      onMouseEnter={() => onHoverDate(date)}
      onClick={() => onSelectDate(date)}
    >
      <span
        className={`
          w-7 h-7 p-0.5 flex items-center justify-center rounded-full border-2 border-transparent
          ${isInRange ? 'hover:!text-zinc-400' : ''}
          ${isCurrentMonth ? 'text-zinc-300' : 'text-zinc-500'}
          ${isSelected && !isInRange ? '!text-lime-300 border-2 border-zinc-800' : ''}
          ${isToday ? 'bg-lime-300 !text-lime-950 border-2 border-lime-300' : ''}
          ${isToday && isSelected ? 'bg-zinc-800 !text-lime-300' : ''}
          ${isToday ? 'hover:!text-zinc-100 hover:!bg-transparent' : ''}
        hover:!bg-zinc-800
        `}
      >
        {date.getDate()}
      </span>
    </div>
  )
}
