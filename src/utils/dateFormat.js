import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const formattedDate = (date) => {
    if (!date) {
        return 'Даты не доступна'
    }
    const parsedDate = new Date(date)
    if (isNaN(parsedDate)) {
        return 'Некоректная Даты'
    }

    return format(parsedDate, 'dd.MM.yy', { locale: ru })
}

export default formattedDate
