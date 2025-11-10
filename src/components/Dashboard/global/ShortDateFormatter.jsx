const ShortDateFormatter = new Intl.DateTimeFormat('es-CO', {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
});

export default ShortDateFormatter;
