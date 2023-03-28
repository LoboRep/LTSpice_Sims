jQuery(document).ready(function(){
    /*jQuery('<input>').attr({
        type: 'hidden',
        name: 'f[]',
        value: 'im_field_category%3A' + search_redirect_category
    }).appendTo('form.form.form-search.container');*/


    jQuery('form.form.form-search.container').submit(function () {
        //jQuery(this).append('<input type="text" name="f[]" value="'+search_redirect_category+'" />');
        var keys = jQuery(this).find('input[name="keys"]').val();
        //jQuery(this).attr('action', jQuery(this).attr('action') + 'site/' + encodeURIComponent(keys) + '?f[0]=im_field_category%3A' + search_redirect_category);
        window.open(jQuery(this).attr('action') + 'site/' + encodeURIComponent(keys) + '?f[0]=im_field_category%3A' + search_redirect_category,'_blank');
        //location.href = jQuery(this).attr('action') + 'site/' + encodeURIComponent(keys) + '?f[0]=im_field_category%3A' + search_redirect_category;
        return false;
    });
});