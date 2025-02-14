$(document).ready(function() {
    $(".container").mouseenter(function() {
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function() {
        $(".card").stop().animate({
            top: "0"
        }, "slow");
    });

    $(".valentines").click(function() {
        let card = $(".card");
        if (card.position().top < 0) {
            card.stop().animate({ top: "0" }, "slow");
        } else {
            card.stop().animate({ top: "-90px" }, "slow");
        }
    });
});
