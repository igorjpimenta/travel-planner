import { DatePicker, DatePickerProps } from "./date-picker"
import { getDateRange } from "./date-picker/calendar"
import { InputWrapperProps } from "./input-wrapper"

import { useRef, useState } from "react"

interface DateInputWrapperProps extends InputWrapperProps, Pick<DatePickerProps, 'mode'> {}

export function DateInputWrapper({
  icon: Icon,
  classNames,
  placeholder,
  disabled=false,
  mode='date',
}: DateInputWrapperProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const [dateValue, setDateValue] = useState('')
  const [openCalendar, setOpenCalendar] = useState(false)
  const ref = useRef(null)

  function formatDateRange(startDate: Date, endDate: Date): string {
    const startMonth = startDate.toLocaleString('default', { month: 'long' })
    const endMonth = endDate.toLocaleString('default', { month: 'long' })
  
    const startDay = startDate.getDate()
    const endDay = endDate.getDate()

    if (startDate === endDate) {
      return `${startMonth} ${startDay}`
    }
  
    if (startMonth === endMonth) {
      return `${startMonth} ${startDay} to ${endDay}`
    }
    
    return `${startMonth} ${startDay} to ${endMonth} ${endDay}`
  }

  function handleDatePicking(date: Date) {
    if (mode !== 'dateRange') {
      const dateValue = date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })
  
      setDateValue(dateValue)
    }

    if (mode === 'dateRange' && startDate) {
      const { rangeStart, rangeEnd } = getDateRange(startDate, date)

      setDateValue(formatDateRange(rangeStart, rangeEnd))
    }
  }

  return (
    <div
      ref={ref}
      className="relative space-y-6"
    >
        <div
          data-disabled={disabled}
          onClick={() => !disabled && setOpenCalendar(!openCalendar)}
          className={`flex items-center gap-2 select-none data-[disabled=false]:cursor-pointer data-[disabled=true]:cursor-default ${classNames && classNames}`}
        >
          {Icon && <Icon className="text-zinc-400 size-5 shrink-0" />}

          <span className={dateValue ? "text-zinc-100" : "text-zinc-400"}>
            {dateValue || placeholder}
          </span>
        </div>

        {openCalendar && (
          <DatePicker
            divRef={ref}
            onDateChange={handleDatePicking}
            containerOpen={openCalendar}
            setContainerOpen={setOpenCalendar}
            mode={mode}
            selectedDateState={[selectedDate, setSelectedDate]}
            startDateState={[startDate, setStartDate]}
            endDateState={[endDate, setEndDate]}
          />
        )}
      </div>
  )
}