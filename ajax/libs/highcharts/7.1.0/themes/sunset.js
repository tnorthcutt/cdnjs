/**
 * @license Highcharts JS v7.1.0 (2019-04-01)
 *
 * (c) 2009-2019 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
'use strict';
(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = root.document ?
            factory(root) :
            factory;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(root);
        });
    } else {
        if (root.Highcharts) {
            root.Highcharts.error(16, true);
        }
        root.Highcharts = factory(root);
    }
}(typeof window !== 'undefined' ? window : this, function (win) {
    var _modules = {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);
        }
    }
    _registerModule(_modules, 'parts/Globals.js', [], function () {
        /**
         * (c) 2010-2019 Torstein Honsi
         *
         * License: www.highcharts.com/license
         */

        /**
         * Reference to the global SVGElement class as a workaround for a name conflict
         * in the Highcharts namespace.
         *
         * @global
         * @typedef {global.SVGElement} GlobalSVGElement
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGElement
         */


        /* global win, window */

        // glob is a temporary fix to allow our es-modules to work.
        var glob = typeof win === 'undefined' ?
                (typeof window !== 'undefined' ? window : {}) :
                win,
            doc = glob.document,
            SVG_NS = 'http://www.w3.org/2000/svg',
            userAgent = (glob.navigator && glob.navigator.userAgent) || '',
            svg = (
                doc &&
                doc.createElementNS &&
                !!doc.createElementNS(SVG_NS, 'svg').createSVGRect
            ),
            isMS = /(edge|msie|trident)/i.test(userAgent) && !glob.opera,
            isFirefox = userAgent.indexOf('Firefox') !== -1,
            isChrome = userAgent.indexOf('Chrome') !== -1,
            hasBidiBug = (
                isFirefox &&
                parseInt(userAgent.split('Firefox/')[1], 10) < 4 // issue #38
            );

        var Highcharts = {
            product: 'Highcharts',
            version: '7.1.0',
            deg2rad: Math.PI * 2 / 360,
            doc: doc,
            hasBidiBug: hasBidiBug,
            hasTouch: doc && doc.documentElement.ontouchstart !== undefined,
            isMS: isMS,
            isWebKit: userAgent.indexOf('AppleWebKit') !== -1,
            isFirefox: isFirefox,
            isChrome: isChrome,
            isSafari: !isChrome && userAgent.indexOf('Safari') !== -1,
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(userAgent),
            SVG_NS: SVG_NS,
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: svg,
            win: glob,
            marginNames: ['plotTop', 'marginRight', 'marginBottom', 'plotLeft'],
            noop: function () {
                return undefined;
            },
            /**
             * An array containing the current chart objects in the page. A chart's
             * position in the array is preserved throughout the page's lifetime. When
             * a chart is destroyed, the array item becomes `undefined`.
             *
             * @name Highcharts.charts
             * @type {Array<Highcharts.Chart>}
             */
            charts: [],

            /**
             * A hook for defining additional date format specifiers. New
             * specifiers are defined as key-value pairs by using the
             * specifier as key, and a function which takes the timestamp as
             * value. This function returns the formatted portion of the
             * date.
             *
             * @sample highcharts/global/dateformats/
             *         Adding support for week number
             *
             * @name Highcharts.dateFormats
             * @type {Highcharts.Dictionary<Highcharts.TimeFormatCallbackFunction>}
             */
            dateFormats: {}
        };


        return Highcharts;
    });
    _registerModule(_modules, 'themes/sunset.js', [_modules['parts/Globals.js']], function (Highcharts) {
        /* *
         *
         *  (c) 2010-2019 Highsoft AS
         *
         *  Author: Øystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  Accessible high-contrast theme for Highcharts. Considers colorblindness and
         *  monochrome rendering.
         *
         * */



        Highcharts.theme = {
            colors: ['#FDD089', '#FF7F79', '#A0446E', '#251535'],

            colorAxis: {
                maxColor: '#60042E',
                minColor: '#FDD089'
            },

            plotOptions: {
                map: {
                    nullColor: '#fefefc'
                }
            },

            navigator: {
                series: {
                    color: '#FF7F79',
                    lineColor: '#A0446E'
                }
            }
        };

        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);

    });
    _registerModule(_modules, 'masters/themes/sunset.js', [], function () {


    });
    _modules['masters/themes/sunset.js']._modules = _modules;
    return _modules['masters/themes/sunset.js'];
}));