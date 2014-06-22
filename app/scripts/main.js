/*jshint indent:2 */
/* global AppHelper */
'use strict';

$(document).ready(function() {
  var buttons = $('.nav-pills > li'),
    appHelper = new AppHelper();

  buttons.click(function() {

    var index = buttons.index(this) +1,
      content = $('.content'),
      items = $('.item-box .item');

    // change position of content
    content.removeClass(appHelper.getOppositeLayouts(index));
    content.addClass(appHelper.getPageLayout(index));

    // reset item colors
    var newColor = appHelper.getItemColor(index);
    items.removeClass(appHelper.getOppositeColor(newColor));
    items.addClass(newColor);

  });
});
