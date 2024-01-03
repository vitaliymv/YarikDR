$(".link").click((event) => {
    $(event.target).remove();

    if ($(".link").length == 0) {
        $("form").show();
    }
});

$("form").on("submit", (e) => {
    e.preventDefault();
    if (e.target["t1"].value == "rp" && e.target["t2"].value == "w" && e.target["t3"].value == "m") {
        $("form").remove();
        alert("Не такий ще і старий, 26 мабуть все таки не багато");
        $(".hide").show()
    } else {
        alert("Не оптимізував хD, не уважний. 26 все таки старий вже");
    }
})