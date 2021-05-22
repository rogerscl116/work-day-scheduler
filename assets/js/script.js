// display today's date 
var todaysDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(todaysDate);

// make document ready for js code
$(document).ready(function() {

    // create click event for save button
    $('.saveBtn').on("click", function() {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save in local storage
        localStorage.setItem(time, text);
    })
})

// create function to track hours
function hourTracker() {

    // get current hour
    var currentHour = moment().hour();

    // loop over timeblocks
    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr('id').split('hour')[1]);
        console.log(hourBlock);       
        
    })
}

// get item from local storage
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


hourTracker();