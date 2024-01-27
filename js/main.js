
// sidebar
$('#closeButton').on('click', function () {
    $('#sidebar').addClass('sidebar-hide');
    $('#openButton').animate({ left: "0%" }, 1)

});

$('#openButton').on('click', function () {
    $('#openButton').animate({ left: "25%" }, 1)
    $('#sidebar').removeClass('sidebar-hide')
})

// singers
$('#singers .body:not(:first)').slideUp(0);

$('#singers .head').on('click', function () {
    $(this).next().slideToggle(1000);
    $('.body').not($(this).next()).slideUp(1000);
})

// countDown

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${mins} m`);
    $('#seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}

countDownToTime("15 january  2025");

// textarea counter
let charCounter = 0;

$('#message').on('keyup', function () {
    let charCounter = $('#message').val().length;
    if (100 - charCounter >= 0) {
        $('#characterCounter').text(100 - charCounter);
        $('#messageButton').prop('disabled', false);
    } else {
        $('#characterCounter').text('you have exceeded');
        $('#messageButton').prop('disabled', true);
    }
})

