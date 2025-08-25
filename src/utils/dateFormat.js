import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const formattedDate = (date) => {
    return format(new Date(date), 'dd.MM.yy', { locale: ru })
}

export default formattedDate
