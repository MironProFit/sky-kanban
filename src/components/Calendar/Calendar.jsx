import { useState } from 'react'
import {
  Calendar,
  CalendarTitle,
  CalendarMonth,
  CalendarBlock,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarBtn,
  CalendarBtnGroup,
} from './Calendar.styles.js'

const daysNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

export default function CalendarComponent({
  $isDark,
  handleDateChange,
  selectDate,
  canEdit,
}) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [displayedDate, setDisplayedDate] = useState(new Date())

  const year = displayedDate.getFullYear()
  const month = displayedDate.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  let firstDayOfWeek = new Date(year, month, 1).getDay()
  if (firstDayOfWeek === 0) firstDayOfWeek = 7

  const prevMonth = month === 0 ? 11 : month - 1
  const prevMonthYear = month === 0 ? year - 1 : year
  const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate()

  const calendarMap = []
  for (let i = firstDayOfWeek - 2; i >= 0; i--) {
    let date = new Date(prevMonthYear, prevMonth, daysInPrevMonth - i)
    calendarMap.push({
      num: daysInPrevMonth - i,
      date,
      $otherMonth: true,
      $weekend: calendarMap.length % 7 >= 5,
      $past: date.getTime() < today.getTime(),
    })
  }
  for (let i = 1; i <= daysInMonth; i++) {
    let date = new Date(year, month, i)
    const idx = calendarMap.length
    const $weekend = idx % 7 >= 5
    const $isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()

    calendarMap.push({
      num: i,
      date,
      $cellDay: true,
      $weekend,
      $isToday,
      $past: date.getTime() < today.getTime(),
    })
  }
  while (calendarMap.length % 7 !== 0) {
    let d = calendarMap.length - daysInMonth - (firstDayOfWeek - 2) + 1
    let date = new Date(year, month + 1, d)
    calendarMap.push({
      num: d,
      date,
      $otherMonth: true,
      $weekend: calendarMap.length % 7 >= 5,
    })
  }
  while (calendarMap.length < 42) {
    let d = calendarMap.length - daysInMonth - (firstDayOfWeek - 2) + 1
    let date = new Date(year, month + 1, d)
    calendarMap.push({
      num: d,
      date,
      $otherMonth: true,
      $weekend: calendarMap.length % 7 >= 5,
    })
  }

  const onPrevMonth = () =>
    setDisplayedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    )
  const onNextMonth = () =>
    setDisplayedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    )

  // Нормализуем selectDate для сравнения (убираем влияние часового пояса)
  const selectedDateNormalized = selectDate
    ? new Date(selectDate).setHours(0, 0, 0, 0)
    : null

  return (
    <Calendar $isDark={$isDark}>
      <CalendarTitle>
        <CalendarMonth>
          {monthNames[month]} {year}
        </CalendarMonth>
        <CalendarBtnGroup>
          <CalendarBtn
            $isLeft
            onClick={onPrevMonth}
            aria-label="Предыдущий месяц"
          />
          <CalendarBtn onClick={onNextMonth} aria-label="Следующий месяц" />
        </CalendarBtnGroup>
      </CalendarTitle>
      <CalendarBlock>
        <CalendarContent>
          <CalendarDaysNames>
            {daysNames.map((n, i) => (
              <CalendarDayName key={i}>{n}</CalendarDayName>
            ))}
          </CalendarDaysNames>
          <CalendarCells>
            {calendarMap.map((cell, i) => {
              const cellDateNormalized = cell.date.setHours(0, 0, 0, 0)
              const isSelected =
                selectedDateNormalized !== null &&
                cellDateNormalized === selectedDateNormalized

              return (
                <CalendarCell
                  $isEditMode={canEdit}
                  onClick={
                    canEdit && !cell.$past
                      ? () => {
                          console.log(' Клик по дате:', cell.date)
                          handleDateChange(cell.date)
                        }
                      : undefined
                  }
                  $isDark={$isDark}
                  $selected={isSelected}
                  key={i}
                  $otherMonth={cell.$otherMonth}
                  $cellDay={cell.$cellDay}
                  $isToday={cell.$isToday}
                  $weekend={cell.$weekend}
                  $past={cell.$past}
                  style={{
                    cursor: canEdit && !cell.$past ? 'pointer' : 'default',
                  }}
                >
                  {cell.num}
                </CalendarCell>
              )
            })}
          </CalendarCells>
        </CalendarContent>
      </CalendarBlock>
    </Calendar>
  )
}
