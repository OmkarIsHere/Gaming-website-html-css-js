var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});


function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon")
    document.getElementById("nav").classList.toggle("change")

}

document.addEventListener("mouseover", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'All') {
            $('.game').show();
        }
        else {
            $('.game').not('.' + value).hide();
            $('.game').filter('.' + value).show();
        }
    });
    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});