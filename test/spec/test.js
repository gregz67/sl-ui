/* jshint indent:2 */
/* global describe, it, beforeEach, expect, AppHelper */

(function () {
  'use strict';

  describe('AppHelper', function() {
    var appHelper;

    beforeEach(function() {
      appHelper = new AppHelper();
    });

    describe('.getItemColor', function() {

      it('should return color selector based on page num', function() {
        expect(appHelper.getItemColor(1), 'page 1').to.equal('red');
        expect(appHelper.getItemColor(2), 'page 2').to.equal('blue');
        expect(appHelper.getItemColor(3), 'page 3').to.equal('red');

        // defaults to red for any invalid page num
        expect(appHelper.getItemColor('any invalid value'), 'any invalid value').to.equal('red');
      });

    });

    describe('.getOppositeColor', function() {

      it('should return the opposite color b/w red/blue', function() {
        expect(appHelper.getOppositeColor('red')).to.equal('blue');
        expect(appHelper.getOppositeColor('blue')).to.equal('red');

        // defaults to red
        expect(appHelper.getOppositeColor('any other color')).to.equal('red');
      });
    });

    describe('.getPageName', function() {

      it('should return the page name when given a page num', function() {
        expect(appHelper.getPageName(1), 'page 1').to.equal('One');
        expect(appHelper.getPageName(2), 'page 2').to.equal('Two');
        expect(appHelper.getPageName(3), 'page 3').to.equal('Three');

        // defaults to 'One'
        expect(appHelper.getPageName('any invalid value'), 'any invalid value').to.equal('One');
      });
    });

    describe('.getPageLayout', function() {

      it('should return the page layout when given a page num', function() {
        expect(appHelper.getPageLayout(1), 'page 1').to.equal('bottom-left');
        expect(appHelper.getPageLayout(2), 'page 2').to.equal('top-right');
        expect(appHelper.getPageLayout(3), 'page 3').to.equal('center');

        // defaults to 'bottom-left'
        expect(appHelper.getPageLayout('any invalid value'),'any invalid value').to.equal('bottom-left');
      });
    });

    describe('.getOppositeLayouts', function() {

      it('should return the other page layouts to remove', function() {
        expect(appHelper.getOppositeLayouts(1), 'page 1').to.equal('top-right center');
        expect(appHelper.getOppositeLayouts(2), 'page 2').to.equal('bottom-left center');
        expect(appHelper.getOppositeLayouts(3), 'page 3').to.equal('top-right bottom-left');
      });
    });

  });
})();
