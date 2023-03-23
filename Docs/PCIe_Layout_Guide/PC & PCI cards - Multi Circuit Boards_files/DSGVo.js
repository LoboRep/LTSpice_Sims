
var fromPopup = false;

var cc = {
	jqueryversionrequired: '1.4.4',
    setupcomplete: false,
    scriptdelay: 800,
	executionblock: 0,

    cookieAnalytics: [],
    cookies: {},
    approved: {},
	settings: {},
	
    strings: {
        jqueryWarning: "Developer: Caution! jqueryWarning not defined.",
		textOff: "Developer: Caution! textOff not defined."
	},
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	activateStript: function(thisObj, waiting) {
		if (waiting && typeof google === 'undefined') {
			setTimeout(function () {cc.activateStript(thisObj, waiting);}, waiting);
		} else {
			thisObj.after('<script type="text/javascript" src="' + thisObj.attr('src') + '"></script>');
		}
	},

    execute: function (cookieType) {
        if (cookieType == "necessary") {
			//return;
        }

        jQuery('script.dsgvo-onconsent-' + cookieType + '[type="text/plain"]').each(function () {
            var str = jQuery(this).text();
            var initframe = str.indexOf("<iframe");
            if (initframe > -1){
                var theframe = str.indexOf("</iframe>");
                var strframe = str.substring(initframe, theframe+9);
                //jQuery(this).next().hide()
                jQuery(this).after(strframe)
            } else {
                if (jQuery(this).attr('src')) {
                    //jQuery(this).next().hide();
					thisObj = jQuery(this);
					src = thisObj.attr('src');
					if (src.indexOf('Assets') > 0) {
						setTimeout(function () {cc.activateStript(thisObj, 200);}, 100);
					} else {
						cc.activateStript(thisObj, 0);
					}
                } else {
                    //jQuery(this).next().hide();
                    jQuery(this).after('<script type="text/javascript">' + jQuery(this).html() + '</script>');
                }
            }
        });

        cc.cookies[cookieType].executed = true;
        jQuery(document).trigger("cc_" + cookieType);

        cc.executescriptinclusion(cookieType);
    },	
	
	
	executeoff: function (cookieType) {
        var i = 0;
        jQuery('script.dsgvo-onconsent-' + cookieType + '.dsgvo-showinfo[type="text/plain"]').each(function () {
			i++;
			var str_id ="id_"+cookieType+"_"+i;
			if ($('#'+str_id).length == 0){
				off = cookieType+'Off';
				offString = (typeof cc.strings.strOff[off] == 'undefined') ? cc.strings.textOff : cc.strings.strOff[off];
				var infoOff = "<div class='image_off change_cookies' id="+str_id+"><span class='text_off'><span>"+offString+"</span></span></div>" ;
				jQuery(this).after(infoOff);
				
				jQuery(".tx-go-maps-ext").html(infoOff);
			}
        });
		
    },
	
	
    executescriptinclusion: function (cookieType) {
        timetaken = jQuery('script.cc-onconsent-inline-' + cookieType + '[type="text/plain"]').length * cc.scriptdelay;
		
        now = new Date().getTime();
        if (now < cc.executionblock) {
            setTimeout(cc.executescriptinclusion, cc.executionblock - now, [cookieType]);
            return;
        }
        cc.executionblock = now + timetaken;

        cc.insertscripts(cookieType);
    },	
	

    insertscripts: function (cookieType) {

        jQuery('script.dsgvo-onconsent-inline-' + cookieType + '[type="text/plain"]').first().each(function () {
            cc.uniqelemid++;

            if (jQuery(this).parents('body').length  > 0) {
                jQuery(this).after('<div id="dsgvo-consentarea-' + cc.uniqelemid + '" class="' + cookieType + '"></div>');
                document.write = function (g) {
                    jQuery('#dsgvo-consentarea-' + cc.uniqelemid).append(g);
                };
                document.writeln = function (g) {
                    jQuery('#dsgvo-consentarea-' + cc.uniqelemid).append(g);
                };
            }

            if (jQuery(this).attr('src')) {
                jQuery(this).after('<script type="text/javascript" src="' + jQuery(this).attr('src') + '"></script>');
            } else {
                jQuery(this).after('<script type="text/javascript">' + jQuery(this).html() + '</script>');
            }
            jQuery(this).remove();


        });

        if (jQuery('script.dsgvo-onconsent-inline-' + cookieType + '[type="text/plain"]').length > 0) {
            setTimeout(cc.insertscripts, cc.scriptdelay, [cookieType]);
        }

    },
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////	

    setup: function () {
        jQuery.each(cc.bindfunctions, function (key, value) {
            for (i = 0; i < value.length; i++) {
                jQuery(document).bind("cc_" + key, value[i]);
            }
        });
		
		jQuery('#dsgvo-notification-showinfo').click(function (e) {
			e.preventDefault();
			cc.showmodal();
			jQuery('#dsgvo-modal #dsgvo-modal-showbutton a').trigger('click');
		});		
		
		
        verstr = jQuery().jquery;
        parts = verstr.split('.');
        versionRequired = cc.jqueryversionrequired.split('.');
        jqueryOk = true;
        for (i = 0; i < parts.length && i < versionRequired.length; i++) {
            currentpart = parseInt(parts[i]);
            requiredpart = parseInt(versionRequired[i]);
            if (currentpart < requiredpart) {
                /* Unsatisfied - this part of the version string is less than the version we require */
                jqueryOk = false;
                break;
            }
            if (currentpart > requiredpart) {
                /* Satisfied - this part of the version string is greater than the version we require */
                break;
            }
            /* This version is the same as the one we require.  Check the next part of the version number. */
        }
        if (!jqueryOk) {
            alert(cc.strings.jqueryWarning);
        }
		
        for (var attrname in cc.initobj.cookies) {
            cc.cookies[attrname] = cc.initobj.cookies[attrname];
        }
		
		jQuery.each(cc.cookies, function (key, value) {
			if (cc.getcookie(key)) {
				jQuery('#dsgvo-checkbox-' + key).prop('checked', true);
			}
		})


		if (typeof jQuery.fn.checkboxpicker != 'undefined'){
			$('#dsgvo-modal :checkbox').checkboxpicker({onLabel:(cc.localeLanguage() ? 'Yes' : 'Ja'), offLabel:(cc.localeLanguage() ? 'No' : 'Nein')});
		}
    },	
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
    initialise: function (obj) {
		
        var stringLanguage = cc.messageLanguage();
        if (stringLanguage != '' && stringLanguage != 'error') {
           obj.strings = stringLanguage;			
		}
        cc.initobj = obj;
		
		if (obj.cookieAnalytics !== undefined) {
			cc.cookieAnalytics = obj.cookieAnalytics.split(',').map(item=>item.trim());
		}

        if (obj.settings !== undefined) {
            for (var attrname in obj.settings) {
                this.settings[attrname] = obj.settings[attrname];
            }
        }
        if (obj.strings !== undefined) {
            for (var attrname in obj.strings) {
                this.strings[attrname] = obj.strings[attrname];
            }
        }

        cc.settings.style = "dsgvo-" + cc.settings.style;
        cc.settings.bannerPosition = "dsgvo-" + cc.settings.bannerPosition;
    },	
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
    localeLanguage :function () {
		return (jQuery('html').attr('lang') == 'en') ? 1 : 0;
    },
	
	
    messageLanguage :function () {
        var ajaxResponse = '';
        var objectLanguage = '';
        var lang = cc.localeLanguage();
        var url = '';
        if (lang != 0)
            url =  window.location.protocol + '//' + window.location.hostname + '/?type=1525962364&L='+lang;
        else
            url =  window.location.protocol + '//' + window.location.hostname + '/?type=1525962364';

        jQuery.ajax({
            async: false,
            type:'POST',
            url: url,
            dataType : 'text',
            success : function (response)
            {
                ajaxResponse = response;
            },
            error: function( req, status, err ) {
                console.log( 'something went wrong:', status, err );
                ajaxResponse = 'error'
            }
        });

        if (ajaxResponse != 'error'){
            return JSON.parse(ajaxResponse);
        }
        else
           return ajaxResponse;
    },	
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
    getcookie: function (key, prefix='cc_') {
        var i, x, y, ARRcookies = document.cookie.split(";");
		name = encodeURI(prefix + key);
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == name) {
                return decodeURI(y);
            }
        }
        return false;
    },

    setcookie: function (key, value, expirydays, prefix='cc_') {
		name = encodeURI(prefix + key);
        var exdate = new Date();
        exdate.setTime(exdate.getTime()+(expirydays*24*60*60*1000));
        document.cookie = name + '=' + value + '; expires=' + exdate.toGMTString() + '; path=/'
    },	
	
    deletecookie: function (key, prefix='cc_', domain='') {
		name = encodeURI(prefix + key);
        date = new Date();
        date.setDate(date.getDate() - 1);
		if (domain) {
			document.cookie = name + '=; path=/;  domain=' + domain + '; expires=' + date + '; max-age=0';
		} else {
			document.cookie = name + '=; path=/; expires=' + date + '; max-age=0';
		}
    },

	
    removecookieAnalytics: function (key, sPath, sDomain) {
        for (var i = 0; i < cc.cookieAnalytics.length; i++){
            if (key.substring(0, cc.cookieAnalytics[i].length) == cc.cookieAnalytics[i]){
				cc.deletecookie(key, '', sDomain)
            }
        }
    },	


    reloadifnecessary: function () {
		// wann ist das nicht erforderlich ???
        if (true) {
            setTimeout("location.reload(true);", 0);
        }
    },	

	
	refreshcookies: function () {
		jQuery.each(cc.cookies, function (key, value) {
			thisval = jQuery('#dsgvo-checkbox-' + key).is(':checked');
			if (key == "necessary") {
                thisval = true;
            } 
			
			if (thisval) {
				cc.cookies[key].approved = true;
				cc.approved[key] = "yes";
				cc.setcookie(key, cc.approved[key], cc.settings.cookieExpire);
				cc.execute(key);
			} else {
				var str_domain = window.location.hostname;
				var id = str_domain.indexOf("www");
				if (id != -1) {
					str_domain = str_domain.substring(id+3);
				}
				cc.cookies[key].approved = false;
				cc.approved[key] = "no";
				//cc.setcookie('cc_' + key, cc.approved[key], cc.settings.cookieExpire);
				cc.deletecookie(key);
				
				var i, x, Arraycookie = document.cookie.split(";");
				for (i = 0; i < Arraycookie.length; i++) {
					x = Arraycookie[i].substr(0, Arraycookie[i].indexOf("="));
					x = x.replace(/^\s+|\s+$/g, "");
					if (key == 'analytics'){
						cc.removecookieAnalytics(x,'/',str_domain);
					}
				}
				cc.executeoff(key);				
			}
		});		
	},
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////

    showhidemodal: function (refresh = false) {
        jQuery(this).blur();

        if (jQuery('#dsgvo-modal').is(":visible")) {			// schließen
            cc.closingmodal = true;
			
			if (typeof jQuery.fn.checkboxpicker == 'undefined'){
				// Konflikt mit checkboxpicker
				jQuery.each(cc.cookies, function (key, value) {
					jQuery('#dsgvo-checkbox-' + key).off('change');
				});
			}

			if (refresh) {
				cc.refreshcookies();
				cc.reloadifnecessary();
			}
            jQuery('#dsgvo-modal-overlay').fadeToggle(null, function () {
                cc.closingmodal = false;
            });
        } else if (!jQuery('#dsgvo-modal').is(":visible")) {	// öffnen
            cc.closingmodal = true;		

			jQuery.each(cc.cookies, function (key, value) {
				if (typeof jQuery.fn.checkboxpicker == 'undefined'){
					// Konflikt mit checkboxpicker
					jQuery('#dsgvo-checkbox-' + key).on('change', function () {
						if (jQuery(this).is(':checked')) {
							jQuery(this).parent().removeClass('dsgvo-notification-permissions-inactive');
						} else {
							jQuery(this).parent().addClass('dsgvo-notification-permissions-inactive');
						}
					});
				}				

				jQuery('#dsgvo-label-' + key + ' a.read-more, #dsgvo-description-' + key + ' a.read-more').on('click', function () {
					jQuery(this).hide();
					jQuery(this).next().addClass('active');
					return false;
				});
				jQuery('#dsgvo-label-' + key + ' a.read-less, #dsgvo-description-' + key + ' a.read-less').on('click', function () {
					jQuery(this).parent().removeClass('active');
					jQuery(this).parent().prev().show();
					return false;
				});
			});	
			
            jQuery('#dsgvo-modal-overlay').fadeToggle(null, function () {
                cc.closingmodal = false;
            });
        }
		
        if (cc.ismobile) {
            jQuery('#dsgvo-modal').toggle();
        } else {
            jQuery('#dsgvo-modal').fadeToggle();
        }
        return false;
    },
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	
    showbanner: function () {
		jQuery('#dsgvo-notification').slideDown(function() {
			notificationBox = $(this);
			notificationHeight = notificationBox.outerHeight();
			$('footer').css({'margin-bottom':notificationHeight})
			
			$(window).resize(function() {
				notificationHeight = notificationBox.outerHeight();
				$('footer').css({'margin-bottom':notificationHeight})				
			});
		});
		
		jQuery('#dsgvo-notification-moreinfo').click(function (e) {
			e.preventDefault();
			cc.showmodal();
			jQuery('#dsgvo-modal #dsgvo-modal-showbutton a').trigger('click');
		});
		
		jQuery('#dsgvo-notification-allowNecessary').click(function (e) {
			e.preventDefault();
			fromPopup = true;
			cc.refreshcookies();
			cc.reloadifnecessary();			
		});
		
		jQuery('#dsgvo-notification-allowCookies').click(function (e) {
			e.preventDefault();
			fromPopup = true;
			jQuery.each(cc.cookies, function (key, value) {
				jQuery('#dsgvo-checkbox-' + key).prop('checked', true);
			})			
			cc.refreshcookies();
			cc.reloadifnecessary();			
		});
	},

	////////////////////////////////////////////////////////////////////////////////////////////////

	loadinfo: function(href, section) {
		jQuery("#dsgvo-modal-info").html('<div id="loading"> </div>');
        var lang = cc.localeLanguage();
        var url = '';
        if (lang != 0)
            url = href + '/?L='+lang;
        else
            url = href;
		
		jQuery("#dsgvo-modal-info").load(url + ' #' + section, function() {
			jQuery("#dsgvo-modal-wrapper").scrollTop(0)
		})
	},	
	
    showmodal: function () {

		cc.showhidemodal();
		
		jQuery('#dsgvo-modal .dsgvo-modal-infobutton a').off('click');
		jQuery('#dsgvo-modal .dsgvo-modal-infobutton a').on('click', function (e) {
			e.preventDefault();
			jQuery("#dsgvo-modal-wrapper .dsgvo-title, #dsgvo-modal-wrapper .dsgvo-subtitle, #dsgvo-modal-wrapper .dsgvo-content ul, #dsgvo-modal-wrapper #dsgvo-modal-closebutton").hide()

			href = jQuery(this).attr('href');
			section = jQuery(this).data('section');
			if (jQuery("#dsgvo-modal-info").length) {
				jQuery("#dsgvo-modal-info").remove();
				jQuery("#dsgvo-info-closebutton").remove();
			}
			jQuery("#dsgvo-modal-wrapper .dsgvo-content").append('<div id="dsgvo-modal-info"></div><div id="dsgvo-info-closebutton">&#10006;</div>');
			cc.loadinfo(href, section);
			
			jQuery('#dsgvo-info-closebutton').on('click', function (e) {
				jQuery(this).remove();					
				jQuery("#dsgvo-modal-info").remove();					
				jQuery("#dsgvo-modal-wrapper .dsgvo-title, #dsgvo-modal-wrapper .dsgvo-subtitle, #dsgvo-modal-wrapper .dsgvo-content ul, #dsgvo-modal-wrapper #dsgvo-modal-closebutton").show()					
			});

		});			
		
		jQuery('#dsgvo-modal #dsgvo-modal-showbutton a').off('click');
		jQuery('#dsgvo-modal #dsgvo-modal-showbutton a').on('click', function (e) {
			e.preventDefault();
			jQuery(this).parent().hide();
			jQuery("#dsgvo-modal #dsgvo-modal-savebutton").show()
			jQuery("#dsgvo-check_wrap").show()
			return false;
		});			
		
		jQuery('#dsgvo-modal #dsgvo-modal-savebutton a').off('click');
		jQuery('#dsgvo-modal #dsgvo-modal-savebutton a').on('click', function (e) {
			e.preventDefault();
			fromPopup = true;
			cc.showhidemodal(true);
			return false;
		});			
		
		jQuery('#dsgvo-modal #dsgvo-modal-savebutton_all a').off('click');
		jQuery('#dsgvo-modal #dsgvo-modal-savebutton_all a').on('click', function (e) {
			e.preventDefault();
			fromPopup = true;
			jQuery.each(cc.cookies, function (key, value) {
				jQuery('#dsgvo-checkbox-' + key).prop('checked', true);
			})			
			cc.showhidemodal(true);
			return false;
		});			
		
		jQuery('#dsgvo-modal .dsgvo-modal-closebutton a').off('click');
		jQuery('#dsgvo-modal .dsgvo-modal-closebutton a').on('click', function (e) {
			e.preventDefault();
			cc.showhidemodal(false);
			return false;
		});			
	},	

	////////////////////////////////////////////////////////////////////////////////////////////////	

	
    onfirstload: function () {
        if (!cc.setupcomplete && cc.initobj) {

            if (!(window.jQuery)) {
                cc.jqueryattempts++;
                if (cc.jqueryattempts >= 5) {
                    return;
                }
                setTimeout(cc.onfirstload, 200);
                return;
            }

            cc.setupcomplete = true;
            cc.setup();
	
			if (!cc.getcookie('necessary')) {
				// noch nie gespeichert
				if (components.settings.banner == '1') {
					cc.showbanner();			
				} else {
					cc.showmodal();	
				}
				jQuery.each(cc.cookies, function (key, value) {
					cc.executeoff(key);					
				});
			} else {
				cc.refreshcookies();
			}
        }	
		/*
		jQuery("script").each(function() {
			console.log(this)
		})
		*/
		if (jQuery(".change_cookies").length) {
			jQuery(".change_cookies").on('click', function(e) {
				e.preventDefault();
				cc.showmodal();
				jQuery('#dsgvo-modal #dsgvo-modal-showbutton a').trigger('click');
			})
		}
		
		//console.log('DSGVo ready');		
    },	
}

////////////////////////////////////////////////////////////////////////////////////////////////	

//console.log(components)
if (typeof components != 'undefined'){
	// erforderlich ???
	jQuery.each(components.settings, function (key, value) {
		if (key == 'consenttype' && value == 'Opt-in(Explicit)')
			components.settings[key] = 'explicit'
		if (key == 'consenttype' && value == 'Opt-out(Implicit)')
			components.settings[key] = 'implicit'
	});
	
	cc.initialise(components);
}

jQuery(document).ready(cc.onfirstload);

cc.ismobile = jQuery("body").hasClass('mobile');

//console.log('init')

////////////////////////////////////////////////////////////////////////////////////////////////	

/*
var optOutLink = jQuery("#ga-opt-out");

if (cc.getcookie('ga-opt-out', '') == 'true') {
	optOutLink.hide();
}

if(optOutLink) {
    optOutLink.on('click', function() {
        document.cookie = 'ga-opt-out=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        this.innerHTML = "Google Analytics ist deaktiviert!";
        return false;
    })
}
*/
