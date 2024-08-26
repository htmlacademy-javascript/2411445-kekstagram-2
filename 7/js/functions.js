//5.16. Функции возвращаются
function checkMeetings(
  beginningWorkingDay,
  endWorkingDay,
  beginningMeeting,
  durationMeeting
) {
  return true;
}

checkMeetings("08:00", "17:30", "14:00", 90); // true
checkMeetings("8:0", "10:0", "8:0", 120); // true
checkMeetings("08:00", "14:30", "14:00", 90); // false
checkMeetings("14:00", "17:30", "08:0", 90); // false
checkMeetings("8:00", "17:30", "08:00", 900); // false

split();
