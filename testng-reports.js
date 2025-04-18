$(document).ready(function() {
    $('a.navigator-link').click(function() {
        // Extract the panel for this link
        var panel = getPanelName($(this));

        // Mark this link as currently selected
        $('.navigator-link').parent().removeClass('navigator-selected');
        $(this).parent().addClass('navigator-selected');

        showPanel(panel);
    });

    installMethodHandlers('failed');
    installMethodHandlers('skipped');
    installMethodHandlers('passed', true); // hide passed methods by default

    $('a.method').click(function() {
        showMethod($(this));
        return false;
    });

    // Hide all the panels and display the first one (do this last
    // to make sure the click() will invoke the listeners)
    $('.panel').hide();
    $('.navigator-link').first().click();
