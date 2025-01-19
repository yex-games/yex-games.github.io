/**
 * Codelug Namespace
 */
var Codelug = {};

/**
 * Obfuscated identifiers
 */
var hiddenSelectors = {
    gameId: btoa('ingame'), // Encoded ID
    buttonClass: btoa('in-game-button') // Encoded class
};

/**
 * Comment
 */
Codelug.comment = function() {
    if ($('.comments').length > 0) {
        var post_id = $('.comments').attr('data-content');
        var post_type = $('.comments').attr('data-type');
        
        // Decode and use the hidden ID and class
        var gameId = atob(hiddenSelectors.gameId);
        var buttonClass = atob(hiddenSelectors.buttonClass);

        // Dynamically find elements based on the hidden ID and class
        var gameElement = $('#' + gameId);
        var buttonElements = $('.' + buttonClass);

        new Comments($('.comments'), {
            ajaxUrl: Base + "/comments",
            content: post_id,
            type: post_type,
            sortBy: 1,
            replies: true,
            maxDepth: 1,
        });

        // Example of additional usage with hidden elements
        gameElement.hide();
        buttonElements.on('click', function() {
            console.log('Button clicked!');
        });
    }
};
