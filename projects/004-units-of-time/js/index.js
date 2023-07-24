'use strict';

const getDays = 1;
const getHours = 10;
const getMinutes = 12;
const getSeconds = 32;

const hoursDay = 24;
const minutesHours = 60;
const secondsMinutes = 60;

let resultSecunds =
    getDays * hoursDay * minutesHours * secondsMinutes +
    getHours * minutesHours * secondsMinutes +
    getMinutes * secondsMinutes +
    getSeconds;

resultSecunds = alert(
    `The total number of seconds represented by the duration of the exercise is equal to ${resultSecunds}.`
);
