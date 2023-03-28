(function ($) {
  /*jQuery('#salesforce_knowledge_vote_title').live('click', function () {
    if((typeof jQuery.cookie('salesforce_knowledge_vote_feedback_' + node_nid) === 'undefined')) {
      $.fn.salesforce_knowledge_vote_feedback_report_window();
    }
    return false;
  });*/

  // callback for Drupal ajax_command_invoke function
  $.fn.salesforce_knowledge_vote_feedback_js_callback = function(res) {
    if(res == 1) {
      $('.modal-title').css('display', 'none');
      $('#salesforce_knowledge_vote_feedback-sub-title').css('display', 'none');
      $('#salesforce_knowledge_vote_feedback-context-div').css('display', 'none');
      $('#salesforce_knowledge_vote_feedback-report-message #salesforce_knowledge_vote_feedback-form form').css('display', 'none');
      $('#salesforce_knowledge_vote_feedback-close-link').css('display', 'none');
      $('#salesforce_knowledge_vote_feedback-message-page').css('display', 'none');
      $('#salesforce_knowledge_vote_feedback-report-result').html('<strong style="display: block; text-align: center">' + Drupal.t('Thank you for helping us improve!') + '</strong>');

      setTimeout(salesforce_knowledge_vote_feedback_report_close_modal_window, 10000);
    }
  };

  jQuery('#salesforce_knowledge_vote_feedback-close-link a').live('click', function () {
    salesforce_knowledge_vote_feedback_report_close_modal_window();
    return false;
  });

  function salesforce_knowledge_vote_feedback_report_close_modal_window() {
    $('.close').click();
  }

  /**
   * Function restores salesforce_knowledge_vote_feedback report form if form was shown, but report was not sent.
   */
  function salesforce_knowledge_vote_feedback_restore_form() {
    $('#edit-feedback-custom-comment').val('');
    $('#salesforce_knowledge_vote_feedback-report-result').html('');

    $('#salesforce_knowledge_vote_feedback-report-content').appendTo('#salesforce_knowledge_vote_feedback-report-wrapper');
    $('#salesforce_knowledge_vote_feedback-report-form').trigger('reset');
  }

  /**
   * Function shows modal window.
   */
  $.fn.salesforce_knowledge_vote_feedback_report_window = function() {
    // Show dialog.
    Drupal.CTools.Modal.show(Drupal.settings.salesforce_knowledge_vote_feedbackModal);
    $('#salesforce_knowledge_vote_feedback-form').css('display', 'block');
    $('#salesforce_knowledge_vote_feedback-modal-content').html('');
    $('#salesforce_knowledge_vote_feedback-report-content').appendTo('#salesforce_knowledge_vote_feedback-modal-content');
    $('#salesforce_knowledge_vote_feedback-url').val(window.location);
    $('#salesforce_knowledge_vote_feedback_node_nid').val(node_nid);
    // Close modal by Esc press.
    $(document).keydown(function(e) {
      if (e.keyCode == 27) {
        salesforce_knowledge_vote_feedback_restore_form();
      }
    });
    // Close modal by clicking outside the window.
    /*$('#modalBackdrop').click(salesforce_knowledge_vote_feedback_click_close = function(e) {
      //salesforce_knowledge_vote_feedback_restore_form();
      modalContentClose();
      $('#modalBackdrop').unbind('click', salesforce_knowledge_vote_feedback_click_close);
      return false;
    });*/
    // Close modal by "close" link click.
    $('.close').click(function(e) {
      salesforce_knowledge_vote_feedback_restore_form();
      //modalContentClose();
      //$(document).unbind('keydown', salesforce_knowledge_vote_feedback_close);
    });
  };
})(jQuery);
