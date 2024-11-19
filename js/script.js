function initMap() {
    const millenniumPark = { lat: 41.8827, lng: -87.6233 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: millenniumPark,
    });

    const marker = new google.maps.Marker({
        position: millenniumPark,
        map: map,
        title: "Millennium Park, Chicago",
    });
}

$(document).ready(function () {
    let slideCount = $(".slide").length;
    let currentIndex = 0;

    $(".slide").hide();
    $(".slide.active").show();

    $(".prev").on("click", function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        showSlide(currentIndex);
    });

    $(".next").on("click", function () {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });

    $(".dot").on("click", function () {
        currentIndex = $(this).index();
        showSlide(currentIndex);
    });

    function showSlide(index) {
        $(".slide").hide().removeClass("active");
        $(".dot").removeClass("active-dot");
        $(".slide").eq(index).show().addClass("active");
        $(".dot").eq(index).addClass("active-dot");
    }

    showSlide(currentIndex);
});