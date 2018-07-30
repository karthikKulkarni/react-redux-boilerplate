// @flow

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const secondsToMmss = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const result = `${minutes}:${secondsStr}`;
  return result;
};

const getDayOfWeek = (dateTime: Date) => {
  const d = new Date(dateTime);
  return dayNames[d.getDay()];
};

const getDayOfYear = (dateTime: string) => {
  let date365 = 0;

  const currentDate = new Date(dateTime);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const leapYear = new Date(currentYear, 1, 29);
  if (leapYear.getDate() === 29) {
    // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
  }

  for (let i = 0; i < currentMonth; i += 1) {
    date365 += monthLength[i];
  }
  return date365 + currentDay;
};

const get24HourTime = (date: Date) => {
  const hours =
    date.getHours().toString().length === 1
      ? `0${date.getHours()}`
      : date.getHours();
  const minutes =
    date.getMinutes().toString().length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes();
  return `${hours}:${minutes}`;
};

// adds suffixes -st, -nd, -rd, -th
const ordinalIndicator = d =>
  d > 10 && d < 20 ? `${d}th` : d + (["st", "nd", "rd"][(d % 10) - 1] || "th");

// formats to 'Wednesday, the 2nd of August' format
const formatDateFull = (date: Date) =>
  `${dayNames[date.getDay()]}, the ${ordinalIndicator(date.getDate())} of ${
    monthNames[date.getMonth()]
  }`;

// formats to '24:00 Wed 01 Jan 2017' format
const formatTimeDateMed = (date: Date) =>
  // eslint-disable-next-line computed-property-even-spacing
  `${get24HourTime(date)} ${dayNames[date.getDay()].substring(0, 3)} ${
    date.getDate().toString().length === 1
      ? `0${date.getDate()}`
      : date.getDate()
  } ${monthNames[date.getMonth()].substring(0, 3)} ${date.getFullYear()}`;

// formats to 'Wed 01 Jan 2017' format
const formatDateMed = (date: Date) =>
  // eslint-disable-next-line computed-property-even-spacing
  `${dayNames[date.getDay()].substring(0, 3)} ${
    date.getDate().toString().length === 1
      ? `0${date.getDate()}`
      : date.getDate()
  } ${monthNames[date.getMonth()].substring(0, 3)} ${date.getFullYear()}`;

// formats to '01 Jan 2017' format
const formatDateShort = (date: Date) =>
  `${
    date.getDate().toString().length === 1
      ? `0${date.getDate()}`
      : date.getDate()
  } ${monthNames[date.getMonth()].substring(0, 3)} ${date.getFullYear()}`;

// formats to '01 Jan' format
const formatDateShortNoYear = (date: Date) =>
  `${
    date.getDate().toString().length === 1
      ? `0${date.getDate()}`
      : date.getDate()
  } ${monthNames[date.getMonth()].substring(0, 3)}`;

// formats to '20170101' format
const formatDateShortOrder = (date: Date) => {
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${date.getFullYear()}${month}${day}`;
};

const daysSinceFridayMidnight = (date: Date) => {
  const now = new Date();
  const lastFridayDate =
    now.getDay() < 5
      ? now.getDate() - 7 + (5 - now.getDay())
      : now.getDate() + (5 - now.getDay());

  const lastFriday = new Date();
  lastFriday.setDate(lastFridayDate);
  lastFriday.setHours(0, 0, 0, 0);

  return differenceInDays(lastFriday, date);
};

// (/1000 / 60 / 60 / 24) converts timestamp to days
const differenceInDays = (fromDate: Date, toDate: Date) =>
  Math.floor((toDate - fromDate) / 1000 / 60 / 60 / 24);

// TODO: rename
const differenceInDaysTimestamps = (fromDate: number, toDate: number) =>
  (toDate - fromDate) / 1000 / 60 / 60 / 24;

const isSameMonth = (date1: Date, date2: Date) =>
  date1.getMonth() === date2.getMonth();

const isSameYear = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear();

const toTimestamp = (date: Date) => date.getTime();

const dateFromTimestamp = (timestamp: number | string) => new Date(timestamp); // sets negative values to absolute values

const setToAbsoluteValue = (value: number) => Math.abs(value);

export {
  secondsToMmss,
  getDayOfWeek,
  getDayOfYear,
  get24HourTime,
  formatDateFull,
  formatTimeDateMed,
  formatDateMed,
  formatDateShort,
  formatDateShortNoYear,
  formatDateShortOrder,
  daysSinceFridayMidnight,
  differenceInDays,
  differenceInDaysTimestamps,
  isSameMonth,
  isSameYear,
  toTimestamp,
  dateFromTimestamp,
  setToAbsoluteValue
};
