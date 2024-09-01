//5.16. Функции возвращаются

function isWithinWorkingHours(
  startWorkingHours,
  endWorkingHours,
  meetingStartTime,
  meetingDurationMinutes
) {
  // Функция для преобразования времени в минуты
  function timeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  // Преобразуем время начала и конца рабочего дня, а также начало встречи в минуты
  const startWorkingMinutes = timeToMinutes(startWorkingHours);
  const endWorkingMinutes = timeToMinutes(endWorkingHours);
  const meetingStartMinutes = timeToMinutes(meetingStartTime);

  // Вычисляем конец встречи
  const meetingEndMinutes = meetingStartMinutes + meetingDurationMinutes;

  // Проверяем, находится ли встреча в рамках рабочего дня
  return (
    meetingStartMinutes >= startWorkingMinutes &&
    meetingEndMinutes <= endWorkingMinutes
  );
}
console.log(isWithinWorkingHours("08:00", "17:30", "14:00", 90)); // true
console.log(isWithinWorkingHours("8:0", "10:0", "8:0", 120)); // true
console.log(isWithinWorkingHours("08:00", "14:30", "14:00", 90)); // false
console.log(isWithinWorkingHours("14:00", "17:30", "08:0", 90)); // false
console.log(isWithinWorkingHours("8:00", "17:30", "08:00", 900)); // false
