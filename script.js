function getDateObject() {
  return new Date();
}

function getTimeStamp(timestamp) {
  return timestamp.getTime();
}

function getDayOfTheWeek(dateObj) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dateObj.getDay()];
}
function getFormattedDate(dateObj) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObj.toLocaleDateString(undefined, options);
}
function getDaysAgoString(startDate, endDate) {
  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return `${daysDifference} days ago`;
}
let myDateObj = getDateObject();

console.log(myDateObj);

let timestamp = getTimeStamp(myDateObj);

console.log(timestamp);

let day = getDayOfTheWeek(myDateObj);

console.log(day);

let currentFormattedDate = getFormattedDate(new Date());
console.log(currentFormattedDate);
let daysAgo = getDaysAgoString(
  new Date("February 3, 2003 03:00:00"),
  new Date("March 1, 2003 14:50:00")
);
console.log(daysAgo);

let now = new Date();
// console.log(now);
// This function calls the function returns the current date
let currentDate = getDateObject();
console.log(currentDate);
// Since `now` was created before `currentDate`, it should be less recent
console.assert(currentDate instanceof Date);
console.assert(currentDate.getTime() >= now.getTime());

const outputDiv = document.querySelector("#timeContainer");
outputDiv.innerHTML += `<p>${timestamp}</P>`;
// outputDiv.innerHTML += `<p>${now}</P>`;
outputDiv.innerHTML += `<p>${myDateObj}</P>`;
outputDiv.innerHTML += `<p>${day}</P>`;
outputDiv.innerHTML += `<p>${daysAgo}</P>`;
outputDiv.innerHTML += `<p>${currentFormattedDate}</p>`;

// Display three functioning buttons: Start, Stop, and Reset.
// Have functionality to start, stop,pause and reset the stopwatch.
// Display the mins, secs, and millisecs accurately using timestamps. (setInterval and setTimeout with static time counts are not accurate enough; implement timestamps using the Date class to get a more accurate result)
// When your project is finished, complete the Reflection section in the README.md file before you submit the challenge for grading.
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let mins = 0;
let secs = 0;
let milliSecs=0

// function increment() {
//   i++;
//   console.log(i);
// }

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId, 1000);
  }
});
resetBtn.addEventListener("click", () => {
    paused=true
  elapsedTime = Date.now() - startTime;
  clearInterval(intervalId, 1000);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  paused = true;
  intervalId;
  mins = 0;
  secs = 0;
  milliSecs=0
  timeDisplay.textContent="00:00:000";

});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  milliSecs = Math.floor((elapsedTime / (1000 % 60 * 60)));
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
milliSecs=pad(milliSecs)
  secs = pad(secs);
  mins = pad(mins);
  timeDisplay.textContent = `${mins}:${secs}:${milliSecs}`;
  function pad(unit) {
    return ("0" + unit).length > 3 ? unit : "0" + unit ? "0" + unit: "00"
  }
}
