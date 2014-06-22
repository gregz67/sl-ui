/*jshint indent:2 */
/* global AppHelper, History */
'use strict';

$(document).ready(function() {
  var appHelper = new AppHelper(),
    buttons = $('.nav-pills > li'),
    titlePrefix = 'StrongLoop UI Eval | ',

    updatePage = function(next, prev) {
      var content = $('.content'),
        items = $('.item-box .item');

      // if we get undefined values, exit
      if (next === undefined || prev === undefined) {
        return;
      }

      // if page hasn't changed, exit
      if (next === prev) {
        return;
      }

      // change position of content
      content.removeClass(appHelper.getPageLayout(prev));
      content.addClass(appHelper.getPageLayout(next));

      // reset item colors
      items.removeClass(appHelper.getItemColor(prev));
      items.addClass(appHelper.getItemColor(next));

      // toggle button state
      buttons.each(function (index, button) {
        if (index + 1 === prev) {
          $(button).removeClass('active');
        } else if (index + 1 === next) {
          $(button).addClass('active');
        }
      });
    };

  // handle initial load
  var matches = $(location).attr('href').match(/\/\?([123]{1})/);
  if (matches === null) {
    // if we get a bad num, default to one
    History.replaceState({ 'pageNum': 1 }, titlePrefix + appHelper.getPageName(1), '?1' );
  } else {
    updatePage(parseInt(matches[1]), 1);
  }

  // handle button clicks
  buttons.click(function(event) {
    var next = buttons.index(this) + 1;
    event.preventDefault();

    // update history, will updatePage
    History.pushState({ 'pageNum': next }, titlePrefix + appHelper.getPageName(next), '?' + next);
  });

  // handle history state changes
  History.Adapter.bind(window, 'statechange', function() {
    var stateData = History.getState().data,
      prevData = History.getStateByIndex(History.getCurrentIndex() - 1).data;
    updatePage(stateData.pageNum, prevData.pageNum);
  });

});

