$(".nav").appendTo('body')
$(".custome-dropdown > button").click(function (e) {
    e.stopPropagation();
    $(".custome-dropdown > .menu").toggleClass("show")
})

$(".custome-dropdown > .menu > li").click(function () {
    selectedAlgo = parseInt($(this).data("value"));
    $(".custome-dropdown > button > #changealgobtntxt").text($(this).text());

    $(".custome-dropdown > .menu").toggleClass("show")
})
$("body").click(function () {
    $(".custome-dropdown > .menu").removeClass("show")
})