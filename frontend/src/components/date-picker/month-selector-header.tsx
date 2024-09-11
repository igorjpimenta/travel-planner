import { ChevronLeft, ChevronRight } from "lucide-react"

interface MonthSelectorHeaderProps {
  currentYear: number
  onSelectYear: (year: number) => void
  setYearView: () => void
}

export function MonthSelectorHeader({
  currentYear,
  onSelectYear,
  setYearView,
}: MonthSelectorHeaderProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div
        className="hover:text-zinc-400 cursor-pointer"
        onClick={() => onSelectYear(currentYear - 1)}
      >
        <ChevronLeft />
      </div>

      <div
        className="hover:text-zinc-400 cursor-pointer"
        onClick={setYearView}
      >
        {currentYear}
      </div>

      <div
        className="hover:text-zinc-400 cursor-pointer"
        onClick={() => onSelectYear(currentYear + 1)}
      >
        <ChevronRight />
      </div>
    </div>
  )
}