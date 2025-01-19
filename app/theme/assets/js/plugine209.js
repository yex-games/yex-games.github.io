/**
 * Codelug Namespace
 */
var Codelug = {};

/**
 * Comment
 */
Codelug.comment = function() {
    if ($('.comments').length > 0) {
        var post_id = $('.comments').attr('data-content');
        var post_type = $('.comments').attr('data-type');
        new Comments($('.comments'), {
            ajaxUrl: Base + "/comments",
            content: post_id,
            type: post_type,
            sortBy: 1,
            replies: true,
            maxDepth: 1,
        });
    }
};

/**
 * Remove In-Game Button
 */
Codelug.removeInGameButton = function() {
    var inGameButton = document.getElementById("inGame");
    if (inGameButton) {
        inGameButton.remove();
        console.log("The in-game button has been removed.");
    } else {
        console.log("In-game button not found.");
    }
};

// Ensure everything runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    Codelug.comment();
    Codelug.removeInGameButton();
});
