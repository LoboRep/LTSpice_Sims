(function ($) {
  // Show typo report window on Ctrl + Enter.
  // TODO: move this lines to behaviors.
  $(document).keydown(function(event) {
    if (event.ctrlKey && event.keyCode == 13) {
      $.fn.typo_report_window();
      return false;
    }
  });

  // callback for Drupal ajax_command_invoke function
  $.fn.typo_js_callback = function(res) {
    if(res == 1) {
      //$('#typo-report-message').css({'display': 'none'});
      //typo-sub-title
      //modal-title
      $('.modal-title').css('display', 'none');
      $('#typo-sub-title').css('display', 'none');
      $('#typo-context-div').css('display', 'none');
      $('#typo-form').css('display', 'none');
      $('#typo-report-result').html(Drupal.t('Thanks for your feedback - it has been sent to our documentation team for further consideration. Feedback about the documentation is welcomed and appreciated, as we work towards creating a comprehensive and accurate documentation set that best reflects the features, functionality and use of the software.'));



      setTimeout(typo_report_close_modal_window, 10000);
    }
  };
  function typo_report_close_modal_window() {
    $('.close').click();
  }
  /**
   * Function restores typo report form if form was shown, but report was not sent.
   */
  function typo_restore_form() {
    $('#typo-report-content').appendTo('#typo-report-wrapper');
    /*if($('#typo-report-result').css('display') == 'none') {
      $('#typo-report-content').appendTo('#typo-report-wrapper');
    }*/
    $('#edit-typo-comment').val('');
    $('#typo-report-result').html('');
    $('#typo-report-form').trigger('reset');

  }

  function typo_strip_html(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent||tmp.innerText;
  }

  /**
   * Function shows modal window.
   */
  $.fn.typo_report_window = function() {
    var sel = typo_get_sel_text();

    if (typo_strip_html(sel.selected_text).length > Drupal.settings.typo.max_chars) {
      alert(Drupal.t('No more than !max_chars characters can be selected when sending feedback.', {'!max_chars': Drupal.settings.typo.max_chars}));
    }
    else {
      // Get selection context.
      var context = typo_get_sel_context(sel);

      // Show dialog.
      Drupal.CTools.Modal.show(Drupal.settings.TypoModal);

      $('#typo-context-div').css('display', 'block');
      $('#typo-sub-title').css('display', 'block');
      if(sel.selected_html.length == 0) {
          $('#typo-context-div').css('display', 'none');
          $('#typo-sub-title').css('display', 'none');
      }

      $('#typo-form').css('display', 'block');
      $('#typo-modal-content').html('');
      $('#typo-report-content').appendTo('#typo-modal-content');

      $('#typo-context-div').html(context);
      $('#typo-context').val(context);
      $('#typo-url').val(window.location);
      $('#edit-typo-comment').val('');
      // Close modal by Esc press.
      $(document).keydown(function(e) {
        if(e.keyCode == 27) {
          typo_restore_form();
        }
      });

      // Close modal by clicking outside the window.
      /*$('#modalBackdrop').click(typo_click_close = function(e) {
        //typo_restore_form();
        modalContentClose();
        $('#modalBackdrop').unbind('click', typo_click_close);
        return false;
      });*/

      // Close modal by "close" link click.
      $('.close').click(function(e) {
        typo_restore_form();
        //modalContentClose();
        //$(document).unbind('keydown', typo_close);
        //return false;
      });
    }
  };
})(jQuery);
