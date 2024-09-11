import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface YearSelectorProps {
  currentYear: number
  onSelectYear: (year: number) => void
}

export function YearSelector({ currentYear, onSelectYear }: YearSelectorProps) {
  const [years, setYears] = useState<number[]>(getYears(currentYear))

  function getYears(year: number) {
    const position = (year - 1900) % 9

    return Array.from({ length: 9 }, (_, i) => year - position + i)
  }

  return (
    <div className="flex items-center justify-between text-sm gap-2 py-2">
      <div
        className="hover:text-zinc-400 cursor-pointer"
        onClick={() => setYears(getYears(years[0] - 9))}
      >
        <ChevronLeft />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {years.map((year, index) => (
          <div
            key={index}
            data-selected={currentYear === year}
            className={`
              p-2 rounded border-2 border-transparent font-medium cursor-pointer flex justify-center
            hover:!bg-zinc-800 data-[selected=true]:hover:!text-zinc-100 data-[selected=true]:hover:!bg-transparent
            data-[selected=true]:bg-lime-300 data-[selected=true]:!text-lime-950 data-[selected=true]:border-lime-300
            `}
            onClick={() => onSelectYear(year)}
          >
            {year}
          </div>
        ))}
      </div>

      <div
        className="hover:text-zinc-400 cursor-pointer"
        onClick={() => setYears(getYears(years[0] + 9))}
      >
        <ChevronRight />
      </div>
    </div>
  )
}
