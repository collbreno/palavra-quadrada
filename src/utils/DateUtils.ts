import { date as dateUtils } from 'quasar';

const format = 'YYYY/MM/DD';

export function onlyDate(date: Date) {
    const dateStr = dateUtils.formatDate(date, format);
    return new Date(dateStr);
}

export function formatDate(date: Date) {
    return dateUtils.formatDate(date, format);
}

export function isOneDayAhead(date1: Date, date2: Date) {
    return isSameDate(date1, dateUtils.subtractFromDate(date2, {days: 1}))
}

export function isSameDate(date1: Date, date2: Date) {
    return formatDate(date1) == formatDate(date2);
}