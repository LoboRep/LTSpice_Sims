(function ($) {
  jQuery('#feedback_custom-message-page_no').live('click', function () {
    $.fn.feedback_custom_report_window();
    return false;
  });

  jQuery('#feedback_custom-message-page_yes').live('click', function () {
    $.post(
      "/documentation/ajax/feedback-save",
      {
        url: window.location.href,
        node_nid: node_nid
      },
      onAjaxSuccess
    );
    function onAjaxSuccess(data) {
      $('#feedback_custom-message-page').html(Drupal.t('<strong class="feedback_custom-message-page-ty">Thank you for helping us improve!<strong>'));
    }
    return false;
  });

  // callback for Drupal ajax_command_invoke function
  $.fn.feedback_custom_js_callback = function(res) {
    if(res == 1) {
      $('.modal-title').css('display', 'none');
      $('#feedback_custom-sub-title').css('display', 'none');
      $('#feedback_custom-context-div').css('display', 'none');
      $('#feedback_custom-report-message #feedback_custom-form form').css('display', 'none');
      $('#feedback_custom-message-page').css('display', 'none');
      $('#feedback_custom-report-result').html('<strong style="display: block; text-align: center">' + Drupal.t('Thank you for helping us improve!') + '</strong>');

      setTimeout(feedback_custom_report_close_modal_window, 10000);
    }
  };

  function feedback_custom_report_close_modal_window() {
    $('.close').click();
  }

  /**
   * Function restores feedback_custom report form if form was shown, but report was not sent.
   */
  function feedback_custom_restore_form() {
    $('#edit-feedback-custom-comment').val('');
    $('#feedback_custom-report-result').html('');

    $('#feedback_custom-report-content').appendTo('#feedback_custom-report-wrapper');
    $('#feedback_custom-report-form').trigger('reset');
  }

  /**
   * Function shows modal window.
   */
  $.fn.feedback_custom_report_window = function() {
    // Show dialog.
    Drupal.CTools.Modal.show(Drupal.settings.feedback_customModal);
    $('#feedback_custom-form').css('display', 'block');
    $('#feedback_custom-modal-content').html('');
    $('#feedback_custom-report-content').appendTo('#feedback_custom-modal-content');
    $('#feedback_custom-url').val(window.location);
    $('#feedback_custom_node_nid').val(node_nid);
    // Close modal by Esc press.
    $(document).keydown(function(e) {
      if (e.keyCode == 27) {
        feedback_custom_restore_form();
      }
    });
    // Close modal by clicking outside the window.
    /*$('#modalBackdrop').click(feedback_custom_click_close = function(e) {
      //feedback_custom_restore_form();
      modalContentClose();
      $('#modalBackdrop').unbind('click', feedback_custom_click_close);
      return false;
    });*/
    // Close modal by "close" link click.
    $('.close').click(function(e) {
      feedback_custom_restore_form();
      //modalContentClose();
      //$(document).unbind('keydown', feedback_custom_close);
    });
  };
})(jQuery);
