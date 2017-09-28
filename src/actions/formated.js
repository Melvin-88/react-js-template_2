const month = [ 'января', 'февраля', 'марта', 'фпреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


export function formatedTime(date){
    let x = new Date(date);
    let d = {
        hours: x.getHours(),
        minutes: x.getMinutes(),
    };
    let D = {};
    for (let n in d) {
        D[n] = (parseInt(d[n], 10) < 10 ) ? ('0'+d[n]) : (d[n]);
    }
    let time = D.hours + ':' + D.minutes;

    return time;
}

export function formatedDate(date){
    let x = new Date(date);
    let d = {
        day: x.getDate(),
        month: (month[x.getMonth()]),
        year: x.getFullYear()
    };
    let D = {};
    for (let n in d) {
        D[n] = (parseInt(d[n], 10) < 10 ) ? ('0'+d[n]) : (d[n]);
    }
    let day = D.day + ' ' + D.month + ' ' + D.year;

    return day;
}