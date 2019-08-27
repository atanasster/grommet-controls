export type DateFormat = string | number | Date;

export const smallDate = (date: DateFormat, locale: string = 'en-us') => (
  (new Date(date)).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
);

export const shortDate = (date: DateFormat, locale: string = 'en-us') => (
  (new Date(date)).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);


export const longDate = (date: DateFormat, locale: string = 'en-us') => (
  (new Date(date)).toLocaleDateString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
);
