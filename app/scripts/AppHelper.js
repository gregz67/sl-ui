/* jshint indent:2 */
'use strict';

function AppHelper() {
}

AppHelper.prototype = {
  config : {
    1: {
      name: 'One',
      layout: 'bottom-left',
      itemColor: 'red'
    },
    2: {
      name: 'Two',
      layout: 'top-right',
      itemColor: 'blue'
    },
    3: {
      name: 'Three',
      layout: 'center',
      itemColor: 'red'
    }
  },

  /**
   * Returns item color to be used on this page
   * To be used as css selector for item boxes.
   *
   * @param pageNum
   * @returns {string}, default: 'red'
   */
  getItemColor: function (pageNum) {
    var page = this.config[pageNum];
    return (page ? page.itemColor : 'red');
  },

  /**
   * Returns the opposite color b/w red/blue
   * To be used to remove old color selector on item boxes.
   *
   * @param color
   * @returns {string}, default: 'red'
   */
  getOppositeColor: function (color) {
    return (color === 'red' ? 'blue' : 'red');
  },

  /**
   * Returns the name for this page
   *
   * @param pageNum
   * @returns {string}, default: 'One'
   */
  getPageName: function (pageNum) {
    var page = this.config[pageNum];
    return (page ? page.name : 'One');
  },

  /**
   * Returns the layout for the items on this page
   * To be used as css selector for main content area
   *
   * @param pageNum
   * @returns {string}, default: 'bottom-left'
   */
  getPageLayout: function(pageNum) {
    var page = this.config[pageNum];
    return (page ? page.layout : 'bottom-left');
  },

  getOppositeLayouts: function(pageNum) {
    if (pageNum === 2) {
      return 'bottom-left center';
    } else if (pageNum === 3) {
      return 'top-right bottom-left';
    }

    return 'top-right center';
  }

};
