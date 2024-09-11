import { months } from "./utils"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarHeaderProps {
  currentMonth: number
  currentYear: number
  setPreviousMonth: () => void
  setNextMonth: () => void
  setMonthView: () => void
}

export function CalendarHeader({
  currentMonth,
  currentYear,
  setPreviousMonth,
  setNextMonth,
  setMonthView,
}: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div
        onClick={setPreviousMonth}
        className="hover:text-zinc-400 cursor-pointer"
      >
        <ChevronLeft />
      </div>

      <div
        onClick={setMonthView}
        className="hover:text-zinc-400 cursor-pointer"
      >
        {months[currentMonth]} {currentYear}
      </div>

      <div
        onClick={setNextMonth}
        className="hover:text-zinc-400 cursor-pointer"
      >
        <ChevronRight />
      </div>
    </div>
  )
}