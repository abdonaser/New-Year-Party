

$(document).ready(function () {

    //!start {hide the side Nav} ----------------------------------------------
    // 'first way to show and hide the side Nav "using tow buttons"
    /*
    $(document).ready(function () {
        //' Hide SideNav
        let navWidth = $('.sideNave').outerWidth(true)
        $(".btn-close").click(function () {
            $(".sideNave").animate({
                left: `-${navWidth}px`
            }, 500);
        });
        //'Show SideNav
        $(".navBtn").click(function () {
            $(".sideNave").animate({
                left: `0`
            }, 500);
        });
    });
    */

    //' second  way to show and hide the side Nav the 'smart way' "using One buttons"
    let sideNaveWidth = $('.sideNave').outerWidth(true)
    let isVisible = false //' By Defauld the SideNave is Closed
    $('.navBtn').click(function () {
        if (isVisible) {
            $('.sideNave').animate({ left: `-${sideNaveWidth}px` }, 500)
            $('.sideNave i ').removeClass("fa-angles-left")
            $('.sideNave i ').addClass("fa-angles-right")

        } else {
            $('.sideNave').animate({ left: `0` }, 500)
            $('.sideNave i ').removeClass("fa-angles-right")
            $('.sideNave i ').addClass("fa-angles-left")
        }
        isVisible = !isVisible; // this will be always the opposite value of the isVisible
    })


    document.addEventListener('click', function (e) {
        var sideNave = document.querySelector('.sideNave')
        if (isVisible == true) {
            if (!sideNave.contains(e.target)) {
                $('.sideNave').animate({ left: `-${sideNaveWidth}px` }, 500)
                $('.sideNave i ').removeClass("fa-angles-left")
                $('.sideNave i ').addClass("fa-angles-right")
                isVisible = !isVisible; // this will be always the opposite value of the isVisible
            }
        }
    })

    //!End {hide the side Nav} ----------------------------------------------

    //! Secdual Section 
    $('.itemInner').click(function () {
        $(this).next().slideToggle(500)

        if ($(this).find('i').hasClass('fa-angles-right') == true) {
            $(this).find('i').removeClass("fa-angles-right")
            $(this).find('i').addClass("fa-angles-down")
        } else {
            $(this).find('i').removeClass("fa-angles-down")
            $(this).find('i').addClass("fa-angles-right")
        }

        $('.scedualItems p').not($(this).next()).slideUp(500)

        //' remove the down and add  right
        $('.scedualItems i').not($(this).find('i')).removeClass("fa-angles-down")
        $('.scedualItems i').not($(this).find('i')).addClass("fa-angles-right")

    });

    //! handel the scroll animation of SideNave 
    $(".navLink a[href^='#']").click(function () {
        // 'To solve the problem of 'Bootstrap 5 + Jquery animate scrollTop laggy on Chrome only'
        $('html').css("scroll-behavior", " auto")

        const selectedHref = $(this).attr("href")
        const selectedOffset = $(selectedHref).offset().top
        $('html , body').animate({ scrollTop: selectedOffset }, 700)
    })



    //! handel the scroll animation of FooterNave 
    $(".footerNav a[href^='#']").click(function () {
        // 'To solve the problem of 'Bootstrap 5 + Jquery animate scrollTop laggy on Chrome only'
        $('html').css("scroll-behavior", " auto")

        const selectedHref = $(this).attr("href")
        const selectedOffset = $(selectedHref).offset().top
        $('html , body').animate({ scrollTop: selectedOffset }, 700)
    })


    //! handel the textarea

    $('textarea').keydown(function (e) {
        let myLength = $(this).val().length;
        let allowedLength = 100

        // $('#numOfChar').text(
        //     (allowedLength - myLength <= 0) ? ("your avaliable character finished") : (allowedLength - myLength)
        // )

        if (allowedLength - myLength <= 0) {
            document.querySelector('.ramaining').innerHTML = `
                <span class=" text-danger me-1 " id="numOfChar">${allowedLength - myLength}</span>
                   your avaliable character finished
            `
        } else {
            document.querySelector('.ramaining').innerHTML = `
                <span class=" text-danger me-1 " id="numOfChar">${allowedLength - myLength}</span>
                     character remainnig
            `
        }
    });

    //! Handel the Duration Section
    $('#countdown').countdown({
        year: 2025,   // YYYY Format
        month: 1,     // 1-12
        day: 1,       // 1-31
        hour: 0,     // 24 hour format 0-23
        minute: 0,   // 0-59
        second: 0,    // 0-59
        timezone: +2, // http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        labels: true, // Show/Hide label elements
        onFinish: function () {
            $('#countdown').css("padding", "0")
            $('#countdown').html(`
            <h2 class="p-2 m-0 ">the timer is Dowen </h2>
        `)
        }  // Executes client side when timer is zero
    })



})







