$(document).ready(function () {
    // set default language
    var langChoice;
    $.get("https://ipinfo.io", function (response) {
        langChoice = localStorage.getItem("language");
        if (langChoice == null || langChoice == undefined) {
            console.log("nulllll");
            if (response.country == "VN") {
                localStorage.setItem("language", "VN");
            }
            else {
                localStorage.setItem("language", "EN");
            }
        }
        langChoice = localStorage.getItem("language");
        console.log(langChoice);// work!
        if (langChoice !== null) {
            if (langChoice == "EN") {
                $('.lang-select').eq(0).addClass('active'); // set default
                switchLang(langEng);
            }
            else {
                $('.lang-select').eq(1).addClass('active'); // set default
                switchLang(langVn);
            }
        }
        $('.show-current-lang span').text(langChoice); // set default
        clickContent();
        console.log(langChoice); // work!
        loadContent();

    }, "jsonp")
        .fail(function () {
            // console.log("1111111111111111111111111"); // work!
            alert("Your browers is not supported for other languages!");
            $('.show-current-lang span').text("EN");
            localStorage.setItem("language", "EN");
            langChoice = localStorage.getItem("language");
            $('.lang-select').eq(0).addClass('active'); // set default
            clickContent();
            console.log(langChoice); // work!
            loadContent();
        })

    function clickContent() {
        $('.show-current-lang').click(function (event) {
            event.preventDefault();
            $('.lang-choice').toggleClass('active');
            $('.img-lang-current').toggleClass('active');
        });
        $(document).mouseup(e => {
            if (!$('.lang-choice').is(e.target) // if the target of the click isn't the container...
                && $('.lang-choice').has(e.target).length === 0) // ... nor a descendant of the container
            {
                $('.lang-choice').removeClass('active');
                $('.img-lang-current').removeClass('active');
            }
        });
        // click ul
        for (let index = 0; index < $('.lang-select').length; index++) {
            $('.lang-select').eq(index).click(function (event) {
                event.preventDefault();
                // style change
                if ($('.lang-choice').hasClass('active')) { $('.lang-choice').removeClass('active'); }
                if ($('.img-lang-current').hasClass('active')) { $('.lang-choice').removeClass('active'); }

                for (let j = 0; j < $('.lang-select').length; j++) {
                    $('.lang-select').eq(j).removeClass('active');
                }
                $('.lang-select').eq(index).addClass('active');

                if (index == 0) { // EN
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    location.reload();
                    // switchLang(langEng);
                }
                else if (index == 1) { // VN
                    localStorage.setItem("language", "VN");
                    langChoice = localStorage.getItem("language");
                    location.reload();
                    // switchLang(langVn);
                }
                else {
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    switchLang(langEng);
                }
                langChoice = localStorage.getItem("language");
                $('.show-current-lang span').text(langChoice);
            });
        }
    }
    function loadContent() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => drawChart());

        $(window).resize(function () {
            google.charts.setOnLoadCallback(drawChart);
        })
        var options = {
            'chartArea': {
                width: '94%' // width inside chart !important 
            },
            'width': '100%',
            'height': '100%',
            'backgroundColor': 'transparent',
            'titleTextStyle': {
                color: '#f38320',
                fontSize: 16,
            },
            'fontSize': 14,
            'chartArea.left': 0,
            'chartArea.top': 0,
            'legend': {
                position: 'labeled',
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
                alignment: 'center',
            },
            'tooltip': {
                trigger: 'none'
                // textStyle: {
                //     fontSize: 11
                // }
            }
        };