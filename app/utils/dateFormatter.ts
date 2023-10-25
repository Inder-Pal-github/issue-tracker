function getFormattedDate(date: Date) {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return formattedDate;
}

export { getFormattedDate };
