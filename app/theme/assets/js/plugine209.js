/**
 * Google Analytics
 */
(function() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0P827HR68F";
    document.head.appendChild(script);

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0P827HR68F');
    };
})();

/**
 * Codelug Namespace
 */
var Codelug = {};

/**
 * Remove In-Game Button
 */
Codelug.removeInGameButton = function() {
    var button = document.getElementById("inGame");
    if (button) {
        button.remove();
    }
};

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

    // Remove the in-game button if it exists
    Codelug.removeInGameButton();
};
