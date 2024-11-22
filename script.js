$(document).ready(function () {
    let expanded = false;

    $("#toggle-btn").click(function () {
        if (!expanded) {
            // Expand the card
            $(".profile-card").animate({ height: "350px" }, 400);
            $(".profile-bio").slideDown(400);
            $(".profile-image").css("filter", "blur(4px)");
            $(this).text("Show Less");
        } else {
            // Collapse the card
            $(".profile-card").animate({ height: "200px" }, 400);
            $(".profile-bio").slideUp(400);
            $(".profile-image").css("filter", "blur(0)");
            $(this).text("Show More");
        }
        expanded = !expanded;
    });
});
