function getSleepHours(day) {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 5;
    } else if (day === 'saturday') {
        return 9;
    } else if (day === 'sunday') {
        return 2;
    } else {
        return 0;
    }
}
console.log(getSleepHours('saturday'));

function getActualSleepHours() {

    const total = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return total;
}
console.log(getActualSleepHours());


function getIdealSleepHours(idealHours) {
    return idealHours * 7;
}
console.log(getIdealSleepHours(8));


function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let debt = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours) {
        return console.log("the user got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
        return console.log('the user got more sleep than needed ');
    } else if (actualSleepHours < idealSleepHours) {
        return console.log("the user should get some rest,", debt, "hours need more to sleep");
    }


}
calculateSleepDebt();