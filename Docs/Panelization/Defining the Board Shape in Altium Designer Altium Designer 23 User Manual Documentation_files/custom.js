jQuery(document).ready(function(){

    if (typeof node_nid !== 'undefined') {
      if(jQuery.cookie('feedback_send_' + node_nid) != 1) {
        $('#feedback_custom-message-page').css('display', 'block');
      }
    }

    if(jQuery('html').hasClass('desktop') && (jQuery(window).width() > 1120)) {
      let elements_height;
      elements_height = jQuery('#site-header').height() + jQuery('.inner-wrapper.container').height() + (jQuery('.b-contacts').height() + 80);
      if(elements_height < jQuery(window).height()) {
        /*jQuery('#block-system-main .content .node .content').height(jQuery(window).height() - elements_height);*/
        jQuery('#block-system-main .content .node .content').css('min-height', jQuery(window).height() - elements_height + 'px');
      }
    }

    jQuery('body.page-node-248096 .field-name-body u').each(function (i, val) {
        console.log(i);
        console.log(val);

        var str = jQuery(val).text().toLowerCase();
        console.log(str);
        if(str.indexOf('votes') + 1) {
            //console.log('Finded votes');
            jQuery(val).parent().parent().addClass('list-issues');
            jQuery(val).parent().addClass('list-issues__item');

            jQuery(val).addClass('list-issues__votes');
        }

    });


    /*jQuery('img').each(function (i, val) {
        console.log(i);

        var protocol = location.protocol;
        var slashes = protocol.concat("//");
        var host = slashes.concat(window.location.hostname);

        var src = jQuery(this).attr('src');

        var ext = src.split('.').pop();

        console.log(src);

        src  = src.replace('.' + ext, '_NEXUS.' + ext);

        console.log(src);

        jQuery('<div>', { style: 'display: none;', class: 'temp_element_' + i}).appendTo('body');

        jQuery(this).wrap("<div style='position: relative' class='image_wrapper image_wrapper_" + i + "'></div>");

        jQuery('div.temp_element_' + i).load(src, {}, function( response, status, xhr ) {
            console.log(status);

            if(status == 'error') {
                jQuery('<div>', { class: 'image_wrapper_status image_wrapper_ad_not_n'}).appendTo('.image_wrapper_' + i);
            } else if(status == 'success') {
                jQuery('<div>', { class: 'image_wrapper_status image_wrapper_ad_n'}).appendTo('.image_wrapper_' + i);
            }
            jQuery('div.temp_element_' + i).remove();
        });

        console.log('==================');
    });*/


    jQuery('#edit-field-show-ad-nexus-und-none').parent().hide();




    if(jQuery.cookie('showmodaldialog') != 1) {
        jQuery('.desktop .live-conference-all').css('display', 'block')
        jQuery.cookie('showmodaldialog', '1', { expires: 1, path: '/' });
    }

    jQuery('a.btn-account').live('click', function () {
        var url = new URL(window.location.href);
        url.searchParams.set('allogin', 1);
        window.location = url.href;
        return false;
    });


	jQuery('code').each(function (i, val) {
        if(jQuery(this).attr('class') && (jQuery(this).attr('class').length > 5)) {
            var code_pre_brash = jQuery(this).attr('class').substr(0, 5);
            if(code_pre_brash == 'brush') {
                jQuery(this).replaceWith('<pre class="' + jQuery(this).attr('class') + '">' + jQuery(this).html() + '</pre>');
            }
        }
    });

	/*jQuery('tt').each(function (i, val) {
        jQuery(this).replaceWith('<pre class="brush:xml">' + jQuery(this).html() + '</pre>');
    });*/



    /*if ((typeof print_nid !== 'undefined') && (typeof node_nid !== 'undefined')) {
        var str;
        var get_param = '';
        if(clone_space_nexus) {
            get_param = '?space=nexus';
        }
        if(typeof version_name !== 'undefined') {
            var version_param;
            version_param = 'version=' + version_name;

            if(get_param.length == 0) {
                get_param = '?' + version_param;
            } else {
                get_param += '&' + version_param;
            }
            jQuery('span.print_pdf a').attr('href', jQuery('span.print_pdf a').attr('href').replace("?" + version_param, ""));
            jQuery('span.print_html a').attr('href', jQuery('span.print_html a').attr('href').replace("?" + version_param, ""));
        }

        str = jQuery('span.print_pdf a').attr('href') + get_param;
        jQuery('span.print_pdf a').attr('href', str.replace(node_nid, print_nid));
        /!*if(typeof version_name !== 'undefined') {
            jQuery('span.print_pdf a').attr('href', str.replace("/printpdf", "/" + version_name + "/printpdf"));
        }*!/

        str = jQuery('span.print_html a').attr('href') + get_param;
        jQuery('span.print_html a').attr('href', str.replace(node_nid, print_nid));
        /!*if(typeof version_name !== 'undefined') {
            jQuery('span.print_html a').attr('href', str.replace("/print", "/" + version_name + "/print"));
        }*!/
    }*/

    if ((typeof print_nid !== 'undefined') && (typeof node_nid !== 'undefined')) {
        var str;
        var get_param = '';
        if(clone_space_nexus) {
            get_param = '?space=nexus';
        }
        if(typeof version_name !== 'undefined') {
            var version_param;
            version_param = 'version=' + version_name;

            if(get_param.length == 0) {
                get_param = '?' + version_param;
            } else {
                get_param += '&' + version_param;
            }
            jQuery('span.print_html a').attr('href', jQuery('span.print_html a').attr('href').replace("?" + version_param, ""));
        }

        str = jQuery('span.print_html a').attr('href') + get_param;
        jQuery('span.print_html a').attr('href', str.replace(node_nid, print_nid));
    }


    /* Collapsed Block (Start) */

        if(window.location.hash !== '') {
          var windows_location_hash = window.location.hash.replace('#!', '#');
          jQuery.each(jQuery(windows_location_hash).parents('div.collapse-text-fieldset'), function (index, value) {
            if(!jQuery(value).hasClass('collapsed')) {
              jQuery(value).find('div.title a').click();
            }
          });
          if(jQuery(windows_location_hash).next().hasClass('collapse-text-fieldset')) {
            if(!jQuery(windows_location_hash).next().hasClass('collapsed')) {
              jQuery(windows_location_hash).next().find('div.title a').click();
            }
          }
          jQuery(windows_location_hash).next().removeClass('collapse-text-video-autoplay');
        }

        function collapsed_block_all_open() {
          jQuery('div.collapse-text-fieldset:not(.collapsed) div.title a').click();
        }

        jQuery(document).bind('keydown.Ctrl_f',function (evt){collapsed_block_all_open();});

    /* Collapsed Block (End) */

    /* Fix width Panels first column (Start) */


    jQuery('table').each(function (i, val) {
        var panel_width = 100;

        if(jQuery('html').hasClass('desktop')) {
            panel_width = 150;
        }

        jQuery(val).find('th:first:contains("Panel")').width(panel_width);
        jQuery(val).find('th:first:contains("Panel")').attr('width', panel_width + 'px');
    });


    /* Fix width Panels first column (End) */

    /* InterCome Iframe (Start) */

    var intercom_iframe_resize_check;

    intercom_iframe_resize_load = false;

    jQuery('iframe#iframe-intercom-id').load(function() {
        iResize();
        intercom_iframe_resize_load = true;
        jQuery(window).resize();
    });


    function iResize() {
        var iframe = null;
        iframe = jQuery('#iframe-intercom-id').contents();

        jQuery('#iframe-intercom-id').height(200 + jQuery('section.section', iframe).height());
    }

    jQuery(window).resize(function() {
        if(intercom_iframe_resize_load) {
            intercom_iframe_resize_load = false;
        } else {
            iResize();
        }


    });

    /* InterCome Iframe (End) */

});

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for(var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}
