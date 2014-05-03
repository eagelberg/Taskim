define([], function () {
    return function () {
        this.parseDate = function (dateMs) {
            var parsedDate = '';
            var date = new Date(dateMs);
            var now = new Date();
            var dd = date.getDate();
            var time_in_ms = date.getTime();
            var mm = date.getMonth() + 1; //January is 0!
            var yyyy = date.getFullYear();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var now_time_in_ms = now.getTime();
            var now_dd = now.getDate();
            var now_mm = now.getMonth() + 1;
            var now_yyyy = now.getFullYear();

            // fix mid
            var mid = 'am';
            if (hour === 0) { //At 00 hours we need to show 12 am
                hour = 12;
            }
            else if (hour > 12) {
                hour = hour % 12;
                mid = 'pm';
            }

            // fix day (can be today, yesterday or Jan 02 for example)
            if (dd === now_dd && yyyy === now_yyyy) {
                dd = 'today';
            } else if (dd === now_dd && yyyy === now_yyyy) {
                dd = 'yesterday';
            } else {
                if (dd < 10) {
                    dd = '0' + dd;
                }

                dd = this.getMonthName(mm) + ' ' + dd;
            }

            // fix year (can be either previous year or empty)
            if (yyyy < now_yyyy) {
                yyyy = '(' + yyyy + ')';
            } else {
                yyyy = '';
            }

            // fix whole date
            var secondDiff = (now_time_in_ms - time_in_ms) / 1000;
            if (secondDiff < 5) {
                parsedDate = 'just now';
            } else if (secondDiff > 5 && secondDiff <= 60) {
                parsedDate = 'a minute ago';
            } else {
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                parsedDate = dd + ' ' + yyyy + ' at ' + hour + ':' + minutes + ' ' + mid;
            }

            return parsedDate;

        },

            this.getMonthName = function (month) {
                var monthName = new Array();
                monthName[0] = "Jan";
                monthName[1] = "Feb";
                monthName[2] = "March";
                monthName[3] = "April";
                monthName[4] = "May";
                monthName[5] = "June";
                monthName[6] = "July";
                monthName[7] = "Aug";
                monthName[8] = "Sep";
                monthName[9] = "Oct";
                monthName[10] = "Nov";
                monthName[11] = "Dec";
                return monthName[month];
            }

    }
});

