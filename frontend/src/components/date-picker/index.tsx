import { Calendar } from "./calendar"
import { CalendarHeader } from "./calendar-header"
import { TodayPicker } from "./calendar-today-picker"
import { useClickOutside } from "./hooks"
import { MonthSelector } from "./month-selector"
import { MonthSelectorHeader } from "./month-selector-header"
import { YearSelector } from "./year-selector"

import { useState } from "react"

export interface DatePickerProps {
  onDateChange: (date: Date) => void
  containerOpen: boolean
  setContainerOpen: React.Dispatch<React.SetStateAction<boolean>>
  divRef: React.MutableRefObject<null>
  mode?: 'dateRange' | 'date'
  selectedDateState: [Date | null, React.Dispatch<React.SetStateAction<Date | null>>]
  startDateState: [Date | null, React.Dispatch<React.SetStateAction<Date | null>>]
  endDateState: [Date | null, React.Dispatch<React.SetStateAction<Date | null>>]
}

export function DatePicker({
  onDateChange,
  containerOpen,
  setContainerOpen,
  divRef,
  mode='date',
  selectedDateState,
  startDateState,
  endDateState,
}: DatePickerProps) {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [selectedDate, setSelectedDate] = selectedDateState
  const [startDate, setStartDate] = startDateState
  const [endDate, setEndDate] = endDateState

  const [currentMonth, setCurrentMonth] = useState<number>((selectedDate || new Date()).getMonth())
  const [currentYear, setCurrentYear] = useState<number>((selectedDate || new Date()).getFullYear())
  const [view, setView] = useState<'calendar' | 'month' | 'year'>('calendar')

  useClickOutside({ ref: divRef, handler: handleClickOutside })
  
  function handleClickOutside() {
    let date = selectedDate || new Date()

    // if (mode === 'dateRange' && startDate && !endDate) {
    //   setStartDate(null)
    //   setSelectedDate(null)
    //   date = new Date()
    // }
    
    setContainerOpen(false)
    setCurrentMonth(date.getMonth())
    setCurrentYear(date.getFullYear())
    setView('calendar')
  }

  function handleSelectDate(date: Date) {
    if (mode !== 'dateRange') {
      setSelectedDate(date)
      onDateChange(date)
      setContainerOpen(false)
      return
    }

    if (!startDate) {
      setStartDate(date)

    } else if (!endDate) {
      setEndDate(date)
      setSelectedDate(date)
      setContainerOpen(false)
      onDateChange(date)

    } else {
      setStartDate(date)
      setEndDate(null) // check if selectedDate is different than the startDate when already have endDate and then handle it not overriding the actual endDate until it be selected
    }
  }

  function handleHoverDate(date: Date) {
    if (mode === 'dateRange' && startDate) {
      setHoveredDate(date)
    }
  }

  function handleSelectMonth(month: number) {
    setCurrentMonth(month)
    setView('calendar')
  }

  function handleSelectYear(year: number) {
    setCurrentYear(year)
    setView('month')
  }

  function handlePreviousMonth() {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1)

    } else {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    }
  }

  function handleNextMonth() {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1)

    } else {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    }
  }

  return (
    containerOpen && (
      <div
        data-view={view}
        className={`
          absolute z-10 bg-zinc-900 mt-2 space-y-2 truncate p-3 rounded-lg shadow-shape select-none
          data-[view=calendar]:w-[248px]
          data-[view=month]:w-[190px]
          data-[view=year]:w-[270px]
        `}
      >
        {(() => {
          switch (view) {
            case 'calendar':
              return (
                <>
                  <CalendarHeader
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    setPreviousMonth={handlePreviousMonth}
                    setNextMonth={handleNextMonth}
                    setMonthView={() => setView('month')}
                  />

                  <Calendar
                    selectedDate={selectedDate}
                    hoveredDate={hoveredDate}
                    startDate={startDate}
                    endDate={endDate}
                    mode={mode}
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    onSelectDate={handleSelectDate}
                    onHoverDate={handleHoverDate}
                  />

                  {mode !== 'dateRange' && <TodayPicker onPickToday={() => handleSelectDate(new Date)} />}
                </>
              )
            case 'month':
              return (
                <>
                  <MonthSelectorHeader
                    currentYear={currentYear}
                    onSelectYear={setCurrentYear}
                    setYearView={() => setView('year')}
                  />

                  <MonthSelector
                    currentMonth={currentMonth}
                    onSelectMonth={handleSelectMonth}
                  />
                </>
              )
            case 'year':
              return (
                <YearSelector
                  currentYear={currentYear}
                  onSelectYear={handleSelectYear}
                />
              )
          }
        })()}
      </div>
    )
  )
}
