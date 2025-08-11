const cards = [
    { id: 1, topic: 'Web Design', title: 'Важное собрание', date: '2023-10-30', status: 'Без статуса' },
    { id: 2, topic: 'Web Design', title: 'Обсуждение проекта', date: '2023-11-02', status: 'Нужно сделать' },
    { id: 3, topic: 'Web Design', title: 'Курс повышения квалификации', date: '2023-11-05', status: 'В работе' },
    { id: 4, topic: 'Web Design', title: 'Митинг команды', date: '2023-11-07', status: 'Тестирование' },
    { id: 5, topic: 'Web Design', title: 'Дедлайн проекта', date: '2023-11-15', status: 'Готово' },

    { id: 6, topic: 'UI/UX', title: 'Отчет о проделанной работе', date: '2023-11-20', status: 'Без статуса' },
    { id: 7, topic: 'UI/UX', title: 'Обсуждение новых идей', date: '2023-11-25', status: 'Нужно сделать' },
    { id: 8, topic: 'UI/UX', title: 'Работа с документацией', date: '2023-11-28', status: 'В работе' },
    { id: 9, topic: 'UI/UX', title: 'Анализ пользовательского опыта', date: '2023-12-01', status: 'Тестирование' },
    { id: 10, topic: 'Проблемы и ошибки', title: 'Обсуждение багов', date: '2023-12-05', status: 'Готово' },

    { id: 11, topic: 'Web Development', title: 'Обновление системы', date: '2023-12-10', status: 'Без статуса' },
    { id: 12, topic: 'Web Development', title: 'Настройка серверов', date: '2023-12-15', status: 'Нужно сделать' },
    { id: 13, topic: 'Web Development', title: 'Миграция данных', date: '2023-12-20', status: 'В работе' },
    { id: 14, topic: 'Web Development', title: 'Оптимизация кода', date: '2023-12-25', status: 'Тестирование' },
    { id: 15, topic: 'Web Development', title: 'Запуск приложения', date: '2023-12-30', status: 'Готово' },

    { id: 16, topic: 'Web Design', title: 'Создание логотипа', date: '2024-01-01', status: 'Без статуса' },
]

export default cards

export const statusList = [
  { id: 0, name: 'Без статуса' },
  { id: 1, name: 'Нужно сделать' },
  { id: 2, name: 'В работе' },
  { id: 3, name: 'Тестирование' },
  { id: 4, name: 'Готово' }
]
