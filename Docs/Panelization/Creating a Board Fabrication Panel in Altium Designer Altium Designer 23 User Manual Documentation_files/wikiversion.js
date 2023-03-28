(function ($) {
    $(window).load(function () {
        $('.form-version select').on('change', function (evt) {
            document.location.href = evt['currentTarget']['value'];
        });
    });
})(jQuery);