export function convertDateToPublishDate(date: Date): string {
    return `${date.getUTCDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}