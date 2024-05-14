"use strict";
// MatomoSetup.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMatomoTracking = exports.trackLink = exports.trackSiteSearch = exports.trackEvent = exports.trackPageView = exports.setCustomDimension = exports.setMatomoConfig = void 0;
var lodash_1 = require("lodash");
require("./globals");
function setMatomoConfig(matomoConfig) {
    var _a;
    // Initialize Matomo tracker
    console.log('matomoConfig', matomoConfig);
    var scriptId = 'matomo-script';
    if (!(0, lodash_1.isNil)(matomoConfig.matomoUrl) &&
        !(0, lodash_1.isNil)(matomoConfig.matomoSiteId) &&
        !(0, lodash_1.isNil)(document.getElementById(scriptId))) {
        console.log('set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = "".concat(matomoConfig.matomoUrl, "matomo.js");
        document.body.appendChild(script);
        window._paq = window._paq || [];
        window._paq.push(['disableCookies', false]);
        window._paq.push(['enableCrossDomainLinking']);
        window._paq.push(['setDoNotTrack', true]);
        window._paq.push(['setTrackerUrl', "".concat(matomoConfig.matomoUrl, "matomo.php")]);
        window._paq.push(['setSiteId', matomoConfig.matomoSiteId]);
    }
    if ((0, lodash_1.size)(matomoConfig.customDimensions) > 0) {
        (_a = matomoConfig.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
            window.customDimensions.push(customDimension);
        });
        console.log('customDimensions', matomoConfig.customDimensions, window.customDimensions);
    }
}
exports.setMatomoConfig = setMatomoConfig;
/**
 * set custom dimension
 * @param customDimensioncustomDimensions
 */
function setCustomDimension(customDimension) {
    if (!!window._paq) {
        window._paq.push(['setCustomDimension', customDimension.id, customDimension.value]);
    }
}
exports.setCustomDimension = setCustomDimension;
/**
 * track page view
 * @param params
 */
function trackPageView(params) {
    var _a;
    console.log('start-page-track', params);
    if (!!window._paq) {
        console.log('customDimensions-local-2', window.customDimensions);
        if ((0, lodash_1.size)(window.customDimensions) > 0) {
            (_a = window.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
                setCustomDimension(customDimension);
            });
        }
        if (params === null || params === void 0 ? void 0 : params.href)
            window._paq.push(['setCustomUrl', params.href]);
        if (params === null || params === void 0 ? void 0 : params.documentTitle)
            window._paq.push(['setDocumentTitle', params.documentTitle]);
        window._paq.push(['trackPageView']);
        console.log('end-page-track');
    }
}
exports.trackPageView = trackPageView;
/**
 * track event
 * @param params
 */
function trackEvent(params) {
    console.log('track-event', params);
}
exports.trackEvent = trackEvent;
/**
 * track site search
 * @param params
 */
function trackSiteSearch(params) {
    console.log('track-search', params);
}
exports.trackSiteSearch = trackSiteSearch;
/**
 * track link
 * @param params
 */
function trackLink(params) {
    console.log('track-link', params);
}
exports.trackLink = trackLink;
/**
 * matomo track
 * @param matomoInfo
 */
function setMatomoTracking(matomoInfo) {
    console.log('track');
    if (matomoInfo.type === 'track-page') {
        trackPageView(matomoInfo.info);
    }
    else if (matomoInfo.type === 'track-event') {
        trackEvent(matomoInfo.info);
    }
    else if (matomoInfo.type === 'track-search') {
        trackSiteSearch(matomoInfo.info);
    }
    else if (matomoInfo.type === 'track-link') {
        trackLink(matomoInfo.info);
    }
}
exports.setMatomoTracking = setMatomoTracking;
