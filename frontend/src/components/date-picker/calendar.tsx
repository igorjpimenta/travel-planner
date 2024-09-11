import { DatePickerProps } from '.'
import { Day } from './calendar-day'
import { getDaysInMonth, isSameDay, isCurrentMonth } from './utils'

export interface CalendarProps extends Pick<DatePickerProps, 'mode'> {
  selectedDate: Date | null
  hoveredDate: Date | null
  startDate: Date | null
  endDate: Date | null
  currentMonth: number
  currentYear: number
  onSelectDate: (date: Date) => void
  onHoverDate: (date: Date) => void
}

export function getDateRange(startDate: Date, finalDate: Date) {
  const rangeStart = startDate < finalDate ? startDate : finalDate
  const rangeEnd = startDate > finalDate ? startDate : finalDate

  return { rangeStart, rangeEnd }
}

export function Calendar({
  selectedDate,
  hoveredDate,
  startDate,
  endDate,
  mode,
  currentMonth,
  currentYear,
  onHoverDate,
  onSelectDate,
}: CalendarProps) {
  const daysInMonth = getDaysInMonth(currentYear, currentMonth)

  function handleCheckRange(date: Date) {
    if (mode === 'dateRange' && startDate) {
      const finalDate = endDate || hoveredDate

      if (finalDate) {
        const { rangeStart, rangeEnd } = getDateRange(startDate, finalDate)
        const inRange = date >= rangeStart && date <= rangeEnd

        return { inRange, rangeStart, rangeEnd }
      }
    }

    return { inRange: false, rangeStart: null, rangeEnd: null}
  }

  return (
    <div className="flex flex-col cursor-default">
        <div className="flex">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div
              key={index}
              className="h-8 w-8 flex items-center justify-center font-medium text-xs text-zinc-500"
            >
              {day}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap">
        {daysInMonth.map((date, index) => (
          <Day
            key={index}
            date={date}
            isSelected={isSameDay(date, selectedDate)}
            isInRange={handleCheckRange(date).inRange}
            isRangeStart={isSameDay(date, handleCheckRange(date).rangeStart)}
            isRangeEnd={isSameDay(date, handleCheckRange(date).rangeEnd)}
            isCurrentMonth={isCurrentMonth(currentMonth, date)}
            onSelectDate={onSelectDate}
            onHoverDate={onHoverDate}
          />
        ))}
      </div>
    </div>
  )
}
