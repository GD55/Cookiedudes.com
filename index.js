var body = document.body;
var pages = ['home', 'thingsWeDo', 'gearsWeUse', 'joinUs', 'contactUs'];
var currentPage = 0;
var ok = true;
var height = $('#thingsWeDo').height();
var width = $('#thingsWeDo').width();

window.onload = function() {
    var url = document.location.href;
    console.log(url);

    function logo() {
        console.log(width)
        if (width + 140 > 1000) {
            $('#centerLogo').attr("src", "./resources/LOGO1.png");
            $('#companyLogo').fadeOut();
        }
    }
    setTimeout(logo, 3000)

    if (url.split('?')[1]) {
        var params = url.split('?')[1].split('&'),
            data = {},
            tmp;
        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = tmp[1];
        }
        if (data.v) {
            changePage(data.v);
        }
    }
}

function menuIcon(x) {
    x.classList.toggle("change");
    $('#menu').toggleClass("d-none");
}

function myFunction(event) {
    if (ok) {
        var y = event.deltaY;
        console.log($(window).scrollTop());
        console.log(height);
        console.log($(document).height());
        if ($(window).scrollTop() <= 0) {
            if (y < 0) {
                if (currentPage > 0) {
                    currentPage = currentPage - 1;
                    changePage(currentPage);
                }
            }
        }
        if ($(window).scrollTop() + height + 0.1 >= $(document).height()) {
            if (y > 0) {
                if (currentPage < 4) {
                    currentPage = currentPage + 1;
                    changePage(currentPage);
                }
            }
        }
    }
}

function changePage(val) {
    currentPage = parseInt(val);
    hideAllPages();
    $('#nav' + val).addClass('selected');
    collapse();
    setTimeout(function() {
        $('#' + pages[val]).fadeIn('slow');
        ok = true;
    }, 850)
}

function collapse() {
    $('#menu').addClass("d-none");
    $('.menuIcon').removeClass("change");
}

function hideAllPages() {
    for (var i = 0; i < 5; i++) {
        $('#' + pages[i]).fadeOut('slow');
        if (i != 0) {
            $('#nav' + i).removeClass('selected');
        }
    }
    ok = false;
}