/*jshint indent:2 */
'use strict';
$(document).ready(function() {
  var buttons = $('.nav-pills > li');

  buttons.click(function() {

    var index = buttons.index(this),
      content = $('.content'),
      items = $('.item-box .item');

    // change position of content
    content.attr('class', function(ignore, cls) {
      // update class based on button index
      return cls.replace(/\bposition-\S+/g, 'position-' + index);
    });

    // reset item colors
    if (index === 1) {
      // if two, blue boxes
      items.removeClass('red').addClass('blue');
    } else {
      // otherwise, red boxes
      items.removeClass('blue').addClass('red');
    }

  });
});
