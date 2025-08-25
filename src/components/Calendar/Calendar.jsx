// export default function Calendar() {
//     return (
//         <Calendar>
//             <div className="calendar__content">
//                 <div className="calendar__days-names">
//                     <div className="calendar__day-name">пн</div>
//                     <div className="calendar__day-name">вт</div>
//                     <div className="calendar__day-name">ср</div>
//                     <div className="calendar__day-name">чт</div>
//                     <div className="calendar__day-name">пт</div>
//                     <div className="calendar__day-name -weekend-">сб</div>
//                     <div className="calendar__day-name -weekend-">вс</div>
//                 </div>
//                 <div className="calendar__cells">
//                     <div className="calendar__cell _other-month">28</div>
//                     <div className="calendar__cell _other-month">29</div>
//                     <div className="calendar__cell _other-month">30</div>
//                     <div className="calendar__cell _cell-day">31</div>
//                     <div className="calendar__cell _cell-day">1</div>
//                     <div className="calendar__cell _cell-day _weekend">2</div>
//                     <div className="calendar__cell _cell-day _weekend">3</div>
//                     <div className="calendar__cell _cell-day">4</div>
//                     <div className="calendar__cell _cell-day">5</div>
//                     <div className="calendar__cell _cell-day ">6</div>
//                     <div className="calendar__cell _cell-day">7</div>
//                     <div className="calendar__cell _cell-day _current">8</div>
//                     <div className="calendar__cell _cell-day _weekend _active-day">9</div>
//                     <div className="calendar__cell _cell-day _weekend">10</div>
//                     <div className="calendar__cell _cell-day">11</div>
//                     <div className="calendar__cell _cell-day">12</div>
//                     <div className="calendar__cell _cell-day">13</div>
//                     <div className="calendar__cell _cell-day">14</div>
//                     <div className="calendar__cell _cell-day">15</div>
//                     <div className="calendar__cell _cell-day _weekend">16</div>
//                     <div className="calendar__cell _cell-day _weekend">17</div>
//                     <div className="calendar__cell _cell-day">18</div>
//                     <div className="calendar__cell _cell-day">19</div>
//                     <div className="calendar__cell _cell-day">20</div>
//                     <div className="calendar__cell _cell-day">21</div>
//                     <div className="calendar__cell _cell-day">22</div>
//                     <div className="calendar__cell _cell-day _weekend">23</div>
//                     <div className="calendar__cell _cell-day _weekend">24</div>
//                     <div className="calendar__cell _cell-day">25</div>
//                     <div className="calendar__cell _cell-day">26</div>
//                     <div className="calendar__cell _cell-day">27</div>
//                     <div className="calendar__cell _cell-day">28</div>
//                     <div className="calendar__cell _cell-day">29</div>
//                     <div className="calendar__cell _cell-day _weekend">30</div>
//                     <div className="calendar__cell _other-month _weekend">1</div>
//                 </div>
//             </div>
//         </Calendar>
//     )
// }

import { useEffect, useState } from 'react'
import {
    Calendar,
    CalendarTitle,
    CalendarMonth,
    CalendarP,
    CalendarBlock,
    CalendarContent,
    CalendarDaysNames,
    CalendarDayName,
    CalendarCells,
    CalendarCell,
    // Если потребуется навигация, period и др., допишите:
    // CalendarNav,
    // CalendarPeriod,
    // и др.
} from './Calendar.styles.js'
import formattedDate from '../../utils/dateFormat.js'
export default function CalendarComponent() {
    const daysNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    const calendarMap = [
        { num: 28, otherMonth: true },
        { num: 29, otherMonth: true },
        { num: 30, otherMonth: true },
        { num: 31, cellDay: true },
        { num: 1, cellDay: true },
        { num: 2, cellDay: true, weekend: true },
        { num: 3, cellDay: true, weekend: true },
        { num: 4, cellDay: true },
        { num: 5, cellDay: true },
        { num: 6, cellDay: true },
        { num: 7, cellDay: true },
        { num: 8, cellDay: true, current: true },
        { num: 9, cellDay: true, weekend: true, activeDay: true },
        { num: 10, cellDay: true, weekend: true },
        { num: 11, cellDay: true },
        { num: 12, cellDay: true },
        { num: 13, cellDay: true },
        { num: 14, cellDay: true },
        { num: 15, cellDay: true },
        { num: 16, cellDay: true, weekend: true },
        { num: 17, cellDay: true, weekend: true },
        { num: 18, cellDay: true },
        { num: 19, cellDay: true },
        { num: 20, cellDay: true },
        { num: 21, cellDay: true },
        { num: 22, cellDay: true },
        { num: 23, cellDay: true, weekend: true },
        { num: 24, cellDay: true, weekend: true },
        { num: 25, cellDay: true },
        { num: 26, cellDay: true },
        { num: 27, cellDay: true },
        { num: 28, cellDay: true },
        { num: 29, cellDay: true },
        { num: 30, cellDay: true, weekend: true },
        { num: 1, otherMonth: true, weekend: true },
    ]

    const [currentDate, setCurrentDate] = useState(null)
    useEffect(() => {
        const getCurrentDate = formattedDate(new Date())
        setCurrentDate(getCurrentDate)
    }, [])

    console.log(testDate)

    return (
        <Calendar>
            <CalendarTitle>
                <CalendarMonth>Июнь 2024</CalendarMonth>
                <CalendarP>
                    Сегодня: <span>8 июня</span>
                </CalendarP>
            </CalendarTitle>
            <CalendarBlock>
                <CalendarContent>
                    <CalendarDaysNames>
                        {daysNames.map((n, i) => (
                            <CalendarDayName key={i}>{n}</CalendarDayName>
                        ))}
                    </CalendarDaysNames>
                    <CalendarCells>
                        {calendarMap.map((cell, i) => (
                            <CalendarCell key={i} otherMonth={cell.otherMonth} cellDay={cell.cellDay} activeDay={cell.activeDay} current={cell.current} weekend={cell.weekend}>
                                {cell.num}
                            </CalendarCell>
                        ))}
                    </CalendarCells>
                </CalendarContent>
                {/* Можно добавить CalendarNav и CalendarPeriod при необходимости */}
            </CalendarBlock>
        </Calendar>
    )
}
