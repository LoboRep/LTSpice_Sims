jQuery(document).ready(function(){
  if (typeof node_nid !== 'undefined') {

    /*if(typeof jQuery.cookie('salesforce_knowledge_vote_up_' + node_nid) !== 'undefined') {
      $('#salesforce_knowledge_vote_button_up .salesforce_knowledge_vote_button_text span').html(jQuery.cookie('salesforce_knowledge_vote_up_' + node_nid));
    }

    if(typeof jQuery.cookie('salesforce_knowledge_vote_down_' + node_nid) !== 'undefined') {
      $('#salesforce_knowledge_vote_button_down .salesforce_knowledge_vote_button_text span').html(jQuery.cookie('salesforce_knowledge_vote_down_' + node_nid));
    }*/

    salesforce_knowledge_vote_preloadImages(
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/up_selected.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/up_hover.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/up_focus.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/up.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/down_selected.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/down_hover.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/down_focus.png",
      "/documentation/sites/all/modules/custom/salesforce_knowledge/salesforce_knowledge_vote/images/down.png",
    );


    $('#salesforce_knowledge_vote_button_up .salesforce_knowledge_vote_button_text span').load('/documentation/salesforce-knowledge/vote/get/up/' + node_nid);
    $('#salesforce_knowledge_vote_button_down .salesforce_knowledge_vote_button_text span').load('/documentation/salesforce-knowledge/vote/get/down/' + node_nid);

    if(jQuery.cookie('salesforce_knowledge_vote_' + node_nid) == 'up') {
      $('#salesforce_knowledge_vote_button_up').addClass("salesforce_knowledge_vote_button_selected");
    }
    if(jQuery.cookie('salesforce_knowledge_vote_' + node_nid) == 'down') {
      $('#salesforce_knowledge_vote_button_down').addClass("salesforce_knowledge_vote_button_selected");
    }



    jQuery('#salesforce_knowledge_vote_button_up a').live('click', function () {
      if((typeof jQuery.cookie('salesforce_knowledge_vote_feedback_' + node_nid) === 'undefined')) {
        $.fn.salesforce_knowledge_vote_feedback_report_window();
        $('#salesforce_knowledge_vote_feedback-sub-title').html("We are pleased you found this article helpful.<br /> Any further suggestions, please let us know.");
        $('#salesforce_knowledge_vote_feedback_vote').val('up');
      }

      salesforce_knowledge_vote_go('up');

      return false;
    });

    jQuery('#salesforce_knowledge_vote_button_down a').live('click', function () {
      if((typeof jQuery.cookie('salesforce_knowledge_vote_feedback_' + node_nid) === 'undefined')) {
        $.fn.salesforce_knowledge_vote_feedback_report_window();
        $('#salesforce_knowledge_vote_feedback-sub-title').html("We are sorry to hear the article was not helpful for you.<br /> Please help us improve by providing some feedback");
        $('#salesforce_knowledge_vote_feedback_vote').val('down');
      }

      salesforce_knowledge_vote_go('down');

      return false;
    });

    function salesforce_knowledge_vote_go(type) {
      if(
        (typeof jQuery.cookie('salesforce_knowledge_vote_' + node_nid) === 'undefined')
      ) {
        //не кто не голосовал
        salesforce_knowledge_vote_do_vote(type, 'plus');
      } else {
        //кто то голосовал
        if(jQuery.cookie('salesforce_knowledge_vote_' + node_nid) == type) {
          //клик по тойже кнопке
          //Снимаем выбор с текущей кнопки
          salesforce_knowledge_vote_do_vote(type, 'minus');
        } else {
          //смена кнопки
          //Добавляем к текущей кнопки и удаляем из второй
          if(type == 'up') {
            salesforce_knowledge_vote_do_vote('down', 'minus');
            salesforce_knowledge_vote_do_vote('up', 'plus');
          } else {
            salesforce_knowledge_vote_do_vote('up', 'minus');
            salesforce_knowledge_vote_do_vote('down', 'plus');
          }
        }
      }
    }

    function salesforce_knowledge_vote_do_vote(type, operation) {
      if(operation == 'plus') {
        jQuery.cookie('salesforce_knowledge_vote_' + node_nid, type, { path: '/' });
        //$('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').html(Number($('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').text()) + 1);
        $('#salesforce_knowledge_vote_button_' + type).addClass("salesforce_knowledge_vote_button_focus");
        $('#salesforce_knowledge_vote_button_' + type).removeClass("salesforce_knowledge_vote_button_selected");
        $.ajax({
          url: "/documentation/salesforce-knowledge/vote/set/" + type + "/" + node_nid + "/plus",
          success: function(data){
            $('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').html(data);
            $('#salesforce_knowledge_vote_button_' + type).addClass("salesforce_knowledge_vote_button_selected");
            $('#salesforce_knowledge_vote_button_' + type).removeClass("salesforce_knowledge_vote_button_focus");
          }
        });
      } else {
        jQuery.removeCookie('salesforce_knowledge_vote_' + node_nid, { path: '/' });
        /*if(Number($('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').text()) > 0) {
          $('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').html(Number($('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').text()) - 1);
        }*/
        $('#salesforce_knowledge_vote_button_' + type).removeClass("salesforce_knowledge_vote_button_selected");
        $('#salesforce_knowledge_vote_button_' + type).addClass("salesforce_knowledge_vote_button_focus");
        $.ajax({
          url: "/documentation/salesforce-knowledge/vote/set/" + type + "/" + node_nid + "/minus",
          success: function(data){
            $('#salesforce_knowledge_vote_button_' + type + ' .salesforce_knowledge_vote_button_text span').html(data);
            $('#salesforce_knowledge_vote_button_' + type).removeClass("salesforce_knowledge_vote_button_focus");
          }
        });
      }
    }

    function salesforce_knowledge_vote_preloadImages() {
      for (var i = 0; i < arguments.length; i++) {
        new Image().src = arguments[i];
      }
    }
  }
});
