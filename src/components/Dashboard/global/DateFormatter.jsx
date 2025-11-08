const DateFormatter = new Intl.DateTimeFormat('es-CO', {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

export default DateFormatter;
