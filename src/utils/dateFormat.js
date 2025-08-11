import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const formattedDate = (date) => {
    return format(new Date(date), 'dd.MM.yy', { locale: ru })
}

export default formattedDate

// const formatDate = (date) => {
//     const d = new Date(date)
//     console.log(d)
//     const day = String(d.getDate).padStart(2, 0)
//     const month = String(d.getMonth() + 1).padStart(2, 0)
//     const year = d.getMonth()
//     return `${day}.${month}.${year}`
// }
// formatDate
