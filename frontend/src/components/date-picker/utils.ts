export function getDaysInMonth(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month).getDay()
  const numberOfDays = new Date(year, month + 1, 0).getDate()

  const cols = 7
  const rows = (numberOfDays + firstDayOfMonth) > 35 ? 6 : 5
  let index = 1
  const days = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentDate = new Date(year, month, index - firstDayOfMonth)

      days.push(currentDate)
      index++
    }
  }

  return days
}

export function isSameDay(date1: Date, date2: Date | null) {
  return (
    date2 ? (
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate() &&
      date1.getFullYear() === date2.getFullYear()
    ) : false
  )
}

export function isCurrentMonth(month: number, date: Date) {
  return (
    month === date.getMonth()
  )
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]