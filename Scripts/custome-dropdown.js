$(".nav").appendTo('body')
$(".custome-dropdown > button").click(function (e) {
    e.stopPropagation();
    $(".custome-dropdown > .menu").toggleClass("show")
    $(".custome-dropdown  #arrowup").toggleClass("show")
    $(".custome-dropdown #arrowdown").toggleClass("show")
})

$(".custome-dropdown > .menu > li").click(function () {
    selectedAlgo = parseInt($(this).data("value"));
    $(".custome-dropdown > button > #changealgobtntxt").text($(this).text());

    $(".custome-dropdown > .menu").toggleClass("show")
    $(".custome-dropdown  #arrowup").toggleClass("show")
    $(".custome-dropdown #arrowdown").toggleClass("show")
})
$("body").click(function () {
    if ($(".custome-dropdown > .menu").hasClass("show")) {
        $(".custome-dropdown > .menu").removeClass("show")
        $(".custome-dropdown  #arrowup").toggleClass("show")
        $(".custome-dropdown #arrowdown").toggleClass("show")
    }
})