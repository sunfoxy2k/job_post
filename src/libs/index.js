exports.getDurationFromPublic = function (public_time) {
    let resultTime = "";
    let currentTime = Date.now();
    let msec = currentTime - public_time;

    const years = Math.floor(msec / 1000 / 60 / 60 / 24 / 30 / 12);
    msec -= years * 1000 * 60 * 60 * 24 * 30 * 12;

    const months = Math.floor(msec / 1000 / 60 / 60 / 24 / 30);
    msec -= months * 1000 * 60 * 60 * 24 * 7 * 30;

    const weeks = Math.floor(msec / 1000 / 60 / 60 / 24 / 7);
    msec -= weeks * 1000 * 60 * 60 * 24 * 7;

    const days = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= days * 1000 * 60 * 60 * 24;

    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;

    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;

    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    if (years > 0) {
        resultTime = `${Math.trunc(years)} năm trước`;
    } else if (months > 0) {
        resultTime = `${Math.trunc(months)} tháng trước`;
    } else if (weeks > 0) {
        resultTime = `${Math.trunc(weeks)} tuần trước`;
    } else if (days > 0) {
        resultTime = `${Math.trunc(days)} ngày trước`;
    } else if (hh > 0) {
        resultTime = `${Math.trunc(hh)} giờ trước`;
    } else if (mm > 0) {
        resultTime = `${Math.trunc(mm)} phút trước`;
    } else {
        resultTime = `${Math.trunc(ss)} giây trước`;
    }

    return resultTime;
};
