const button = document.querySelector('.button');
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const yearSet = document.querySelector('.getYear');
const monthSet = document.querySelector('.getMonth');
const daySet = document.querySelector('.getDay');

button.addEventListener('click', getDates);
function getDates() {
    if (dayInput.value == '' || yearInput.value == '' || monthInput.value == '') {
        alert("Falta información")
    } else if (dayInput.value < 1 || yearInput.value < 1900 || monthInput.value < 1 || monthInput > 12 || dayInput.value > 31) {
        alert('Inserte información valida')
    } else {
        let fechaNacimiento = new Date(parseInt(yearInput.value), parseInt(monthInput.value - 1), parseInt(dayInput.value)).getTime();
        let actualFecha = new Date().getTime();
        if (fechaNacimiento > actualFecha) {
            alert('Debe ser una fecha anterior a la actual.')
        } else {
            let diferencia = actualFecha - fechaNacimiento;
            let dias = parseInt(diferencia/(1000*60*60*24));
            transformarDias(dias);
        }
    }
}
function transformarDias(dias) {
    year = parseInt(dias / 365);
    month = parseInt((dias - (year * 365)) / 30);
    endDays = parseInt((dias - (year * 365) - (month * 30)))
    yearSet.innerHTML = year;
    monthSet.innerHTML = month;
    daySet.innerHTML = endDays;
}