jQuery(document).ready(function(){
    var basePath = Drupal.settings.basePath;

    var version_name_string = '';

    if(version_name != 'undefined') {
        version_name_string = version_name;
    }


    var clone_space_nexus_text = '';
    var param_data = '';
    if(clone_space_nexus) {
        clone_space_nexus_text = 'nexus';
        param_data = '?' + jQuery.param({
            'space':clone_space_nexus_text,
            'nexus_version':clone_space_nexus_version,
            'ad_version':clone_space_ad_version,
            'version':version_name_string
        });
    } else {
        param_data = '?' + jQuery.param({
            'version':version_name_string
        });
    }

    jQuery('#wikimenu li.collapsed').prepend('<a href="#" class="wikimenu-bullet"></a>');
    jQuery('#wikimenu a.wikimenu-bullet').live('click', function() {
        jQuery(this).parent('li').children('ul.menu').html('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');

        if(jQuery('html').attr('lang') == 'en') {

            jQuery(this).parent('li').children('ul.menu').load(basePath + '/wikimenu-ajax-load/' + jQuery(this).parent('li').attr('nid') + param_data);
        } else {
            var lang = jQuery('html').attr('lang');
            if(lang == 'zh-hans') {
                lang = 'cn';
            }
            if(lang == 'ja') {
                lang = 'jp';
            }
            if(lang == 'ko') {
              lang = 'kr';
            }
            jQuery(this).parent('li').children('ul.menu').load(basePath + lang + '/wikimenu-ajax-load/' + jQuery(this).parent('li').attr('nid') + param_data);
        }

        jQuery(this).parent('li').children('ul.menu').toggle();
        jQuery(this).parent('li').toggleClass('wiki-menu-expanded');
        return false;
    });
    jQuery('#wikimenu a.wikimenu-bullet-1').live('click', function() {

        var parent;

        if(jQuery(this).parent('li').hasClass('dhtml-menu')) {
            parent = jQuery(this).parent('li');
        } else {
            parent = jQuery(this).parent().parent('li');
        }
        jQuery(parent).children('ul.menu').html('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');

        if(jQuery('html').attr('lang') == 'en') {
            jQuery(parent).children('ul.menu').load(basePath + '/wikimenu-ajax-load/' + jQuery(parent).attr('nid') + param_data);
        } else {
            var lang = jQuery('html').attr('lang');
            if(lang == 'zh-hans') {
                lang = 'cn';
            }
            if(lang == 'ja') {
                lang = 'jp';
            }
            if(lang == 'ko') {
              lang = 'kr';
            }


            jQuery(parent).children('ul.menu').load(basePath + lang + '/wikimenu-ajax-load/' + jQuery(parent).attr('nid') + param_data);
        }

        jQuery(parent).children('ul.menu').toggle();
        jQuery(parent).toggleClass('wiki-menu-expanded');
        return false;
    });

    if(jQuery('html').attr('lang') == 'en') {
        var wiki_ajax_load_start_url = basePath + 'wikimenu-ajax-load-start';
    } else {
        var lang = jQuery('html').attr('lang');
        if(lang == 'zh-hans') {
            lang = 'cn';
        }
        if(lang == 'ja') {
            lang = 'jp';
        }
        if(lang == 'ko') {
          lang = 'kr';
        }

        var wiki_ajax_load_start_url = basePath + lang + '/wikimenu-ajax-load-start';
    }

    jQuery('#block-wikimenu-wikimenu div.content').load(wiki_ajax_load_start_url + '/' + jQuery('#wikimenu_curent_node_nid').attr('title') + param_data,  {
        'beforeSend' : function() {
            jQuery('#block-wikimenu-wikimenu div.content').html('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');

        }
    }, function() {
        jQuery('#wikimenu li.collapsed').prepend('<a href="#" class="wikimenu-bullet"></a>');

        if(jQuery('body').hasClass('loaded')) {
            initSidebar();
        } else {
            jQuery(window).load(function() {
                initSidebar();
            });
        }

        function initSidebar() {
            var scrollable = jQuery('.inner-wrapper .scroll-wrapper');

            if(scrollable.hasClass('processed') || jQuery('html').hasClass('mobile') || jQuery('html').hasClass('tablet')) return;

            scrollable.addClass('processed');

            window.initScrollBar();
            window.initSidebarPosition();

            if(scrollable.find('#wikimenu .active').length > 0) {
              scrollable = jQuery('.inner-wrapper .scroll-wrapper');

              var scrollableOffsetTop = scrollable.offset().top;
              var activeItemOffsetTop = scrollable.find('#wikimenu .active').offset().top;
              var offset = activeItemOffsetTop - scrollableOffsetTop;

              if(offset > 0) {
                scrollable.find('> .scrollable').scrollTop(offset);
              }
            }
        }

    });

});


