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
    var iframe = document.querySelector("iframe");
    if (iframe) {
        // Wait for the iframe to load
        iframe.addEventListener("load", function() {
            try {
                var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                var inGameButton = iframeDocument.getElementById("inGame");
                if (inGameButton) {
                    inGameButton.remove();
                    console.log("The in-game button has been removed.");
                } else {
                    console.log("In-game button not found inside the iframe.");
                }
            } catch (error) {
                console.error("Unable to access iframe content. Possible cross-origin restriction:", error);
            }
        });
    } else {
        console.log("Iframe not found.");
    }
};

/**
 * Observe DOM Changes (For dynamically loaded iframes or buttons)
 */
Codelug.observeDOMChanges = function() {
    const observer = new MutationObserver(function(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
                var iframe = document.querySelector("iframe");
                if (iframe) {
                    Codelug.removeInGameButton();
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

// Run everything
document.addEventListener("DOMContentLoaded", function() {
    Codelug.comment();
    Codelug.observeDOMChanges(); // Start observing for changes in the DOM
});
