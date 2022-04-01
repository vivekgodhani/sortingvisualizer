var array_size = 100;
var arr = [];
var speed = 1000;
var delay_time = 10;
var c_delay = 0;
var selectedAlgo = 1;

var colorred = "#ff758f";
var colorgreen = "#4BC6B9";
var coloryellow = "#fdffb6"
var colorblue = "#4f6367";

$(document).ready(function () {
    generate_array();

})

function startSorting() {
    c_delay = 0;
    $(".range").prop('disabled', true);
    $(".range2").prop('disabled', true);
    $("#startsorting").prop('disabled', true);
    $(".custome-dropdown-btn").prop('disabled', true);
    $("#generatenewarray").prop('disabled', true);

    if (selectedAlgo == 1)
        Bubble();
    else if (selectedAlgo == 2)
        mergeSort(0, array_size - 1);
    else if (selectedAlgo == 3)
        selectionSort();
    else if (selectedAlgo == 4)
        insertionSort();

    disabledinput();

}

function generate_array() {
    $('.mainClass').html('');
    arr = [];
    var divwidth = 1200 / array_size;
    for (var i = 0; i < array_size; i++) {
        arr.push(Math.floor(Math.random() * (450 - 100)) + 100);
    }
    var temp = '';
    arr.map(function (i) {
        temp += '<div class="bar" style="width:' + (divwidth - 2) + 'px;height:' + i + 'px"></div>';
    })
    $('.mainClass').html(temp);
}

function div_update(cont, height, color) {
    window.setTimeout(function () {
        $('.bar:nth-child(' + (cont) + ')').css({ "height": height + "px", "background": color });
    }, c_delay += delay_time);
}

function disabledinput() {
    window.setTimeout(function () {
        $(".range").prop('disabled', false);
        $(".range2").prop('disabled', false);
        $("#startsorting").prop('disabled', false);
        $(".custome-dropdown-btn").prop('disabled', false);

        $("#generatenewarray").prop('disabled', false);
    }, c_delay += delay_time);
}




