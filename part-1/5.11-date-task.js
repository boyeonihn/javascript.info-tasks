/* Create a date
importance: 5
Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

Show it using alert.
*/

// MY SOLUTION
let date = new Date("2012-02-20");
date.setHours(3, 12);

alert(date);

/*Show a weekday
importance: 5
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
*/

// MY SOLUTION
function getWeekDay(date) {
    let day = date.getDay();
    
    if (day == 0) {
        return 'SU';
    }
    else if (day == 1) {
        return 'MO';
    }   
    else if (day == 2) {
        return 'TU';
    }
    else if (day == 3){
        return 'WE';
    } 
    else if (day == 4) {
        return 'TH';
    }
    else if (day == 5) {
        return 'FR'; 
    }
    else {
        return 'SA';
    }
}

/* European weekday
importance: 5
European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2

*/

// MY SOLUTION
function getLocalDay(date) {
    let days = [7, 1, 2, 3, 4, 5, 6]
    return days[date.getDay()]; 
}


/* Which day of month was many days ago?
importance: 4
Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. The function should not modify the given date.
*/

// MY SOLUTION
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days)
    return dateCopy.getDate(); 
}


/* Last day of month?
importance: 5
Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/

// MY SOLUTION
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate(); 
}


/* How many seconds have passed today?
importance: 5
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today”.

*/


// MY SOLUTION
function getSecondsToday(){
    let dateNow = Date.now(); 
    let dateStart = Date.now(); 
    dateStart.setHours(0, 0, 0, 0);
    return (dateNow.getTime() - dateStart.getTime()) / 1000; 
}


/* How many seconds till tomorrow?
importance: 5
Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.

*/

// MY SOLUTION
function getSecondsToTomorrow() {
    let tomorrow = new Date();
    let now = new Date(); 
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); 
    return Math.round((tomorrow - now)/1000);
}

