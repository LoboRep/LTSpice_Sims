(function ($) {
  /**
   * Provide the HTML to create the modal dialog.
   * Clone of function Drupal.theme.prototype.CToolsModalDialog.
   */
  Drupal.theme.prototype.salesforce_knowledge_vote_feedbackModalDialog = function () {
    var html = ''
    html += '  <div id="ctools-modal">'
    html += '    <div id="salesforce_knowledge_vote_feedback-modal">'
    html += '      <div class="ctools-modal-content">' // panels-modal-content
    html += '        <div class="modal-header">';
    html += '          <a class="close" id="close" href="#">';
    html +=              Drupal.CTools.Modal.currentSettings.closeText + Drupal.CTools.Modal.currentSettings.closeImage;
    html += '          </a>';
    html += '          <span id="modal-title" class="modal-title">&nbsp;</span>';
    html += '        </div>';
    html += '        <div id="salesforce_knowledge_vote_feedback-modal-content" class="modal-content"></div>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';

    return html;
  }
})(jQuery);
