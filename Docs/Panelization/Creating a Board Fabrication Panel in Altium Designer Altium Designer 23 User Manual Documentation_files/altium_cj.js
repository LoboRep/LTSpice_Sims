(function($) {

  var initialized;

  function init() {
    if (!initialized) {
      initialized = true;
      cjInit();
    }
  }

  $(document).ready(function () {
    init();
  });

  function cjInit() {
    var cjeventId = cjUrlParam('cjevent');
    var cjValues = (cjeventId && cjCookie(cjeventId)) || {};

    cjMktoValues(cjValues);
  }

  function cjCookie(id) {
    var result = {};
    var params = id ? '?id=' + id : '';
    var isDemotest = !!(~window.location.hostname.indexOf('demotest'));

    $.ajax({
      type: 'GET',
      url: 'https://www.altium.com/altium-cj/event' + params,
      dataType: 'json',
      cache: false,
      async: false,
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        if (data && data.cjevent) {
          isDemotest && console.log('cje: ' + data.cjevent);
          result = data;
        }
      }
    })
    return result;
  }

  function cjMktoValues(data) {
    if (typeof MktoForms2 !== 'undefined') {
      MktoForms2.whenReady(function(form) {
        if (!data.cjevent) {
          data = cjCookie();
        }
        if (data.cjevent) {
          var values = {
            'cJEvent': data.cjevent,
            'cJEventDateFT': data.cjeventft,
            'cJEventDateLT': data.cjeventlt
          }
          form.addHiddenFields(values);
        }
      });
    }
  }

  function cjUrlParam(param) {
    var urlParam = new RegExp('[\\?&]' + param + '=([^&#]*)').exec(window.location.href);
    return (urlParam && urlParam[1]) || undefined;
  }

}(jQuery));
