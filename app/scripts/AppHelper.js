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
  }

};
