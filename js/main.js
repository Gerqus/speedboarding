function navigate(el) {
    switchToTab($(el).data('tab-id'));
    makeNavItemActive(el);
}

function switchToTab(tabName) {
    $('.tab-pane').hide();
    $(`.tab-pane#${tabName}`).show();
}

function makeNavItemActive(el) {
    $(el).parents('.nav').find('.nav-link').removeClass('active');
    $(el).addClass('active');
}