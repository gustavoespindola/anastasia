$(document).ready(function() {
    $('.app-link').click(function(e) {
        e.preventDefault();
        let uuid = $(this).attr('data-app');
        let alias = $(this).attr('data-alias');
        if (uuid) {
            localStorage.setItem('app-id', uuid);
        }
        if (alias) {
            localStorage.setItem('app-alias', alias);
        }
        if ($(this).attr('data-toggle') !== 'collapse') {
            window.location = $(this).attr('href');
        }
    });
});
