export function convertDateToPublishDate(date: Date): string {
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
}