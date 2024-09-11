interface TodayPickerProps {
  onPickToday: () => void
}

export function TodayPicker({ onPickToday }: TodayPickerProps) {
  return (
    <div className="flex items-center justify-center text-sm font-semibold hover:text-zinc-400">
      <div
        onClick={onPickToday}
        className="px-3 cursor-pointer"
      >
        Today
      </div>
    </div>
  )
}