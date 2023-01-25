
let del = new Date();

del = del.toString()

let day = del.substr(0,3)

console.log(day);

switch (day) {

        case 'Mon': $('#day-1').addClass('bg-color');
        $('#day-1').addClass('col');
        
        break;
        case 'Tue': $('#day-2').addClass('bg-color');
        $('#day-2').addClass('col'); 

        break;
        case 'Wed': $('#day-3').addClass('bg-color');
        $('#day-3').addClass('col');

        break;
        case 'Thu': $('#day-4').addClass('bg-color');
        $('#day-4').addClass('col');

        break;
        case 'Fri': $('#day-5').addClass('bg-color');
        $('#day-5').addClass('col');

        break;
        case 'Sat': $('#day-6').addClass('bg-color');
        $('#day-6').addClass('col');

        break;
        case 'Sun': $('#day-7').addClass('bg-color');
        $('#day-7').addClass('col');


        break;

    default:
        break;
}