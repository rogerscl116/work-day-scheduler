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

// get item from local storage
$('#hour9 .description').val(localStorage.getItem('hour9'));
