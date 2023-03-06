const talkingCalendar = function (date) {

  let daySuffix = day => {
    if (day === 1 || day === 21 || day === 31) {
      day += 'st';
    } else if (day === 2 || day === 22) {
      day += 'nd';
    } else if (day === 3 || day === 23) {
      day += 'rd'
    } else {
      day += 'st'
    }
    return day
  };

  let times = date.split('/')
  const YYYY = Number(times[0]);
  const MM = Number(times[1]);
  const DD = Number(times[2]);
  let month = ''
  switch (MM) {
    case 1:
      month = 'Janurary'
      break;
    case 2:
      month = 'February'
      break;
    case 3:
      month = 'March'
      break;
    case 4:
      month = 'April'
      break;
    case 5:
      month = 'May'
      break;
    case 6:
      month = 'June'
      break;
    case 7:
      month = 'July'
      break;
    case 8:
      month = 'August'
      break;
    case 9:
      month = 'September'
      break;
    case 10:
      month = 'October'
      break;
    case 11:
      month = 'November'
      break;
    case 12:
      month = 'December'
      break;
    default:
      month = 'Month Unavailable';
  };

  let day = daySuffix(DD);
  return month + ' ' + day + ', ' + YYYY
};
