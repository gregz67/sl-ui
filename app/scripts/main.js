/*jshint indent:2 */
/* global AppHelper, History */
'use strict';

$(document).ready(function() {
  var appHelper = new AppHelper(),
    buttons = $('.nav-pills > li'),
    titlePrefix = 'StrongLoop UI Eval | ',

    updatePage = function(num) {
      var content = $('.content'),
        items = $('.item-box .item');

      // change position of content
      content.removeClass(appHelper.getOppositeLayouts(num));
      content.addClass(appHelper.getPageLayout(num));

      // reset item colors
      var newColor = appHelper.getItemColor(num);
      items.removeClass(appHelper.getOppositeColor(newColor));
      items.addClass(newColor);

      // toggle button state
      buttons.each(function(index, button) {
        if (index === num - 1) {
          $(button).addClass('active');
        } else {
          $(button).removeClass('active');
        }
      });
    };

  // handle initial load
  var matches = $(location).attr('href').match(/\/\?([123]{1})/);
  if (matches === null) {
    // if we get a bad num, default to one
    History.replaceState({ 'pageNum': 1 }, titlePrefix + appHelper.getPageName(1), '?1' );
  } else {
    updatePage(parseInt(matches[1]));
  }

  // handle button clicks
  buttons.click(function() {
    var next = buttons.index(this) + 1;

    // update history, will updatePage
    History.pushState({ 'pageNum': next }, titlePrefix + appHelper.getPageName(next), '?' + next);
  });

  // handle history state changes
  History.Adapter.bind(window, 'statechange', function() {
    var state = History.getState();
    updatePage(state.data.pageNum);
  });

});

