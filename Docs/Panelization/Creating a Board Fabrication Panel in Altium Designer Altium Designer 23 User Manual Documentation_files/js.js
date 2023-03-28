(function ($) {

  if (typeof Drupal != 'undefined') {
    Drupal.behaviors.altium = {
      attach: function (context, settings) {
        if(typeof context.nodeName != 'undefined') {
          init();
        }
      },

      completedCallback: function () {
        // Do nothing. But it's here in case other modules/themes want to override it.
      }
    }
  }

  $(function () {
    if (typeof Drupal == 'undefined') {
      $(window).load(function () {
        window.initScrollBar();
        window.initSidebarPosition();
      });
      init();
    }
  });

  $(window).load(function () {
    $('body').addClass('loaded');
  });

  function init() {
    windowResize();
    initSidebar();
    initSidebarControl();
    initContents();
    initStickyControls('.b-controls');
    initStickyControls('.b-contents', {
      stickyIfPosition: 'bottom',
      indentTop: -68
    });
    initDDFooter();
    initSelect();
    initBlockCollapsed();
    scrollTo('.b-contents .contents ul a', 0, -65);

    elemsHeight();

    initLanguage();
  }

  function initLanguage() {
    var $language = $('.language');

    if (!$language.length) return;

    if(!$language.children().hasClass('current')) {

        var $languageActiveText = $language.find('ul li a.active').text();

        $language.prepend('<div class="current"><span>' + $languageActiveText + '</span></div>');

        var $btnLanguage = $language.find('.current');
        var $languageUl = $language.find('ul');
        var $languageLi = $languageUl.find('li');

        $btnLanguage.on('click touch', expandedLanguage);
        $languageLi.on('click touch', currentLanguage);

    }

    function currentLanguage() {
      var $currentText = $(this).find('a').text();
      $btnLanguage.find('span').text($currentText);
      expandedLanguage();
    }

    function expandedLanguage() {
      $language.toggleClass('expanded');
      $languageUl.slideToggle(300);
    }
  }

  window.initScrollBar = function() {
    var $elem = $('.inner-wrapper .sidebar .scrollable');
    //var $wrapper = $('.outer-wrapper');

    $elem.scrollbar({
      ignoreMobile: true
    });

    //$elem.on('mouseenter', function() {
    //  checkScroll();
    //
    //  $('body').css('overflow', 'hidden');
    //});
    //$elem.on('mouseleave', function() {
    //  $wrapper.css('margin-left', 0);
    //
    //  $('body').css('overflow', 'auto');
    //});
    //
    //function checkScroll() {
    //  var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    //
    //  if(scrollWidth > 0) {
    //    $wrapper.css('margin-left', -scrollWidth);
    //  }
    //}
  };

  function elemsHeight() {
    'use strict';

    function ElemHeight(el, options) {
      this.options = options;
      this.options.heightStyle = this.options && this.options.maxHeightStyle ? 'max-height' : 'height';
      this.elem = document.querySelector(el);

      if(this.elem) {
        this.init();
      }

      return this;
    }

    ElemHeight.prototype.init = function() {
      var self = this;

      this.setHeight();

      window.addEventListener('resize', function() {
        self.setHeight();
      });
      window.addEventListener('scroll', function() {
        self.setHeight();
      });
    };

    ElemHeight.prototype.setHeight = function() {
      if(this.options.startWhenElemHasClass && !this.options.startWhenElemHasClass.el.classList.contains(this.options.startWhenElemHasClass.className)) {
        this.elem.removeAttribute('style');
        return;
      }

      var winHeight = window.innerHeight;
      var winWidth = window.innerWidth;

      for(var i = this.options.breakpoints.length - 1; i >= 0; i--) {
        if(winWidth > this.options.breakpoints[i].width) {
          this.elem.style[this.options.heightStyle] = isNaN(this.options.breakpoints[i].val) ? this.options.breakpoints[i].val : winHeight + this.options.breakpoints[i].val + 'px';
          break;
        }
      }
    };

    new ElemHeight('.b-contents .contents ul', {
      maxHeightStyle: true,
      startWhenElemHasClass: {
        el: document.querySelector('.b-contents'),
        className: 'sticky'
      },
      breakpoints: [
        {
          width: 0,
          val: -100
        },
        {
          width: 880,
          val: -200
        }
      ]
    });

    new ElemHeight('.b-controls .sidebar', {
      maxHeightStyle: false,
      startWhenElemHasClass: false,
      breakpoints: [
        {
          width: 0,
          val: -150
        },
        {
          width: 880,
          val: -100
        }
      ]
    });

    new ElemHeight('.sidebar-control .collapsed-block', {
      maxHeightStyle: false,
      startWhenElemHasClass: false,
      breakpoints: [
        {
          width: 0,
          val: -100
        },
        {
          width: 880,
          val: 'auto'
        }
      ]
    });
  }

  function scrollTo(el, speed, correction) {
    if (typeof el == 'string') {
      el = $(el);

      if (!el.length) return;
    }

    correction = correction ? correction : 0;

    var prefix = '!';

    el.on('click touch', function (e) {
      e.preventDefault();

      scroll(this.getAttribute('href'), speed);
    });

    $(window).on('load', function() {
      if(window.location.hash) {
        scroll(window.location.hash.replace('#!', '#'), 0)
      }
    });

    $(window).on('hashchange', function() {
      scroll(window.location.hash.replace('#!', '#'), 0);
    });

    function scroll(href, speed) {
      if (!$(href).length) return;

      $('html, body').animate({
        scrollTop: $(href).offset().top + correction + 'px'
      }, speed, function() {
        window.location.hash = prefix + href.replace('#', '');
      });
    }
  }

  function initBlockCollapsed() {
    var $wrapper = $('.b-collapsed-block'),
      $btn = $wrapper.find('.title a'),
      $title = $wrapper.find('.title'),
      $expand_text = Drupal.t("Click to Expand"),
      $collapse_text = Drupal.t("Click to Collapse");



    $('.b-collapsed-block').find('.title a').after("<span>" + $expand_text + "</span>");
    $('.b-collapsed-block.collapsed').find('.title span').text($collapse_text);

    $title.on('click touch', function (e) {
      e.preventDefault();

      $(this).closest($wrapper).toggleClass('collapsed');
      if($(this).closest($wrapper).hasClass('collapsed')) {
        $(this).closest($wrapper).find('.title span').text($collapse_text);
      } else {
        $(this).closest($wrapper).find('.title span').text($expand_text);
      }
    })
  }

  function initSelect() {
    $('.form-version select.form-select').select2({
      minimumResultsForSearch: Infinity
    });
  }

  function initSidebarControl() {
    var $sidebar = $('.sidebar-control');

    if (!$sidebar.length) return;

    var $list = $sidebar.find('ul ul');
    var $sidebarItems = $sidebar.find('.sidebar-item');

    var $current;
    for (var i = 0; i < $list.length; i++) {
      $current = $list.eq(i);

      $current.parent().addClass('title').prepend('<span class="btn-collapsed"></span>');
    }

    // $(window).on('resize', function() {
    //   $sidebarItems.removeClass('collapsed');
    // });

    $sidebar.on('click touch', function (e) {
      var $target = $(e.target);
      var $item;

      if($target.hasClass('btn-nav') || $target.hasClass('btn-search')) {
        e.preventDefault();

        $item = $target.closest('.sidebar-item');

        if(!$item.hasClass('collapsed') && $('html').hasClass('desktop')) {
          setTimeout(function() {
            $item.find('.form-search input:not(.form-submit)').focus();
          }, 601);
        }

        $sidebarItems.not($item).removeClass('collapsed');
        $item.toggleClass('collapsed');

      } else if ($target.hasClass('btn-collapsed') || $target.parent().hasClass('title')) {
        e.preventDefault();

        $item = $target.parent();

        if ($item.hasClass('collapsed')) {
          $item.find('.collapsed').removeClass('collapsed');
        }

        $item.toggleClass('collapsed');
      }
    });
  }

  function initSidebar() {
    var $sidebar = $('.sidebar');

    if (!$sidebar.length) return;

    var $body = $('body');
    var $wrapper = $('.b-controls .container');
    var $btnSidebarFixed = $wrapper.find('.btn-sidebar-control');

    // $(window).on('resize', function () {
    //   $body.removeClass('sidebar-fixed');
    //   $body.removeClass('sidebar-collapsed');
    // });

    $btnSidebarFixed.on('click touch', function (e) {
      e.preventDefault();

      $body.toggleClass('sidebar-fixed');
    });

    $sidebar.on('click touch', function (e) {
      var $target = $(e.target);

      if ($target.hasClass('btn-sidebar-control')) {
        e.preventDefault();

        $body.toggleClass('sidebar-collapsed');
      }
    });
  }

  function windowResize() {
    var timer;
    var $body = $('body');

    $(window).on('resize', function () {
      clearTimeout(timer);
      $body.addClass('resizing');

      timer = setTimeout(function() {
        $body.removeClass('resizing');
      }, 600);
    });
  }

  window.initSidebarPosition = function() {
    var $wrapper = $('.inner-wrapper');
    var $sidebar = $('.inner-wrapper .sidebar');

    if (!$sidebar.length || !$wrapper.length) return;

    setPosition();

    $(window).on('resize scroll', function() {
      setPosition();
    });

    function setPosition() {
      var windowHeight = $(window).outerHeight();
      var windowWidth = $(window).outerWidth();
      var scrollTop = $(window).scrollTop();
      var blockPosition = $wrapper.offset().top;
      var blockHeight = $wrapper.outerHeight();

      if(blockHeight < windowHeight) {
        $sidebar.removeClass('fixed');
        $sidebar.removeClass('bottom');

        $sidebar.height(blockHeight);

        return;
      }

      if(scrollTop + windowHeight > blockPosition + blockHeight) {
        $sidebar.addClass('bottom');
        $sidebar.removeClass('fixed');

        $sidebar.height(windowHeight);
      } else if(scrollTop > blockPosition) {
        $sidebar.addClass('fixed');
        $sidebar.removeClass('bottom');

        $sidebar.css({
          height: windowHeight,
          left: windowWidth >= 1786 ? (windowWidth - 1500) / 2 : 'calc(5%)'
        });

      } else {
        $sidebar.removeClass('fixed');
        $sidebar.removeClass('bottom');

        $sidebar.height(windowHeight + scrollTop);
      }
    }
  }

  function initContents() {
    var $wrapper = $('.b-contents');
    var $body = $('body');

    if (!$wrapper.length) return;

    var $btnContentsFixed = $wrapper.find('.btn-contents-control');
    var $btnContentsCollapsed = $wrapper.find('.btn-contents-collapsed');
    var $blockText = $('.content-wrapper');
    var $titles = $wrapper.find('.contents ul a');
    var $currentTitle = $wrapper.find('.current-control h4');

    // $(window).on('resize', function () {
    //   $body.removeClass('contents-fixed');
    // });

    $btnContentsFixed.on('click touch', function (e) {
      e.preventDefault();

      $body.toggleClass('contents-fixed');
    });

    $btnContentsCollapsed.on('click touch', function (e) {
      e.preventDefault();

      $wrapper.toggleClass('contents-collapsed');
    });

    if($titles.length < 6) {
      $wrapper.addClass('not-collapsible');
    }

    $titles.on('click touch', function() {
      $body.removeClass('contents-fixed');
    });

    var $progress = createProgress().find('.progress');

    checkScroll();

    $(window).on('resize scroll', function () {
      checkScroll();
    });

    function checkScroll() {
      if (!$blockText.length) return;

      var wScrollTop = $(window).scrollTop();
      var wHeight = $(window).outerHeight();
      var blockTextOffset = $blockText.offset().top;
      var blockTextHeight = $blockText.outerHeight();

      var width = ((wScrollTop - blockTextOffset) / (blockTextHeight - wHeight)) * 100;

      if (wScrollTop + wHeight > blockTextOffset + blockTextHeight) {
        width = 100;
      } else if (wScrollTop < blockTextOffset) {
        width = 0;
      }

      $progress.css('width', width + '%');

      var $currentContent, $nextContent, nextContentOffset;
      for (var i = 0; i < $titles.length; i++) {

        $currentContent = $($titles.eq(i).attr('href'));

        if(!$currentContent.length) continue;

        $nextContent = $($titles.eq(i + 1).attr('href'));
        nextContentOffset = $nextContent.length ? $nextContent.offset().top - 70 : $blockText.offset().top + $blockText.outerHeight();

        if(wScrollTop >= $currentContent.offset().top - 70 && wScrollTop < nextContentOffset) {
          $titles.removeClass('active');
          $titles.eq(i).addClass('active');
          $currentTitle.text($titles.eq(i).text());

          if($('#page-title .internal_alert').clone().wrap('<p>').parent().html() !== null) {
            $currentTitle.html($('#page-title .internal_alert').clone().wrap('<p>').parent().html() + $currentTitle.html());
            $('.b-contents.sticky .internal_alert').css('margin-left',  -($('.b-contents.sticky .internal_alert').outerWidth()+6) + 'px');
          }
        } else if(wScrollTop < $($titles.eq(0).attr('href')).offset().top - 70) {
          $currentTitle.text($titles.eq(0).text());

          if($('#page-title .internal_alert').clone().wrap('<p>').parent().html() !== null) {
            $currentTitle.html($('#page-title .internal_alert').clone().wrap('<p>').parent().html() + $currentTitle.html());
            $('.b-contents.sticky .internal_alert').css('margin-left',  -($('.b-contents.sticky .internal_alert').outerWidth()+6) + 'px');
          }
        }
      }
    }

    function createProgress() {
      var wrapper = document.createElement('div');
      wrapper.className = 'progress-wrapper';

      var progress = document.createElement('div');
      progress.className = 'progress';

      wrapper.appendChild(progress);

      return $wrapper.prepend(wrapper);
    }
  }

  function initStickyControls($el, options) {
    if (typeof $el == 'string') {
      $el = $($el);

      if (!$el.length) return;
    }

    var config = {
      height: $el.outerHeight(),
      offsetTop: $el.offset().top,
      indentTop: options && options.indentTop ? options.indentTop : 0,
      pseudoClassName: 'pseudo-el',
      stickyIfPosition: options && options.stickyIfPosition ? options.stickyIfPosition : 'top'
    };

    var $pseudoEl = [];

    $el.on('click touch', function() {
      if(!$el.hasClass('sticky')) {
        config.height = $el.outerHeight();
        config.offsetTop = $el.offset().top;
      }
    });

    $(window).on('resize', updateStyles);

    $(window).on('scroll resize', function () {
      setTimeout(function() {
        checkPosition();
      }, 0);
    });

    function updateStyles() {
      if(!$pseudoEl.length) {
        config.height = $el.outerHeight();
        config.offsetTop = $el.offset().top;
      } else {
        config.height = $pseudoEl.outerHeight();
        config.offsetTop = $pseudoEl.offset().top;
      }

    }

    function checkPosition() {
      //jQuery(".media-block").appendTo(jQuery(".header-v2"));
      $(".header-v2__clone").height(getHeaderV2Height());
      $("body.toolbar .header-v2 .media-block").css("top", $("#toolbar").height() + "px");

      var position = config.stickyIfPosition !== 'top' ? config.offsetTop + config.height : config.offsetTop;

      if ($(window).scrollTop() > position + config.indentTop) {
        createPseudoEl();
      } else {
        removePseudo();
      }
    }

    function getHeaderV2Height() {
      var headerV2Height = 0;
      $(".header-v2").children().each(function (index, value) {
        headerV2Height += $(value).height();
      })
      return headerV2Height;
    }

    function createPseudoEl() {
      var headerV2Height = getHeaderV2Height();
      $(".header-v2__clone").height(headerV2Height);

      if($("body").hasClass("header-v2_hidden")){
        headerV2Height = headerV2Height - $(".header-v2 #altium-navigation-header").height();
        /*if($("body").hasClass("toolbar")){
          headerV2Height += $("#toolbar").height();
        }*/
      }

      $el.css("transform", "translateY(" + headerV2Height + "px)");

      $el.addClass('sticky');

      if ($pseudoEl.length) return;

      $pseudoEl = $el.clone().removeClass('sticky').addClass(config.pseudoClassName);
      $el.after($pseudoEl);
    }

    function removePseudo() {
      $el.css("transform", "translateY(0px)");
      $el.removeClass('sticky');

      if (!$pseudoEl.length) return;

      $('.b-contents .contents ul').css('max-height', '');
      $pseudoEl.remove();
      $pseudoEl = [];
    }
  }

  function initDDFooter() {
    var $wrapper = $('.solutions');

    if (!$wrapper.length) return;

    var $footer = $('#site-footer');
    var $btns = $wrapper.find('.btn');

    $btns.on('click touch', function (e) {
      e.preventDefault();

      $(this).parent().toggleClass('active');
    });

    $(document).on('mouseover', function (e) {
      var $target = $(e.target);

      if (!$target.closest($footer).length || !$target.closest('.active').length) {
        $btns.parent().removeClass('active');
      }
    });
  }

})(jQuery);
