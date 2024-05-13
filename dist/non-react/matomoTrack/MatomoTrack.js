"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMatomoTracking = exports.setMatomoConfig = void 0;
var isNil_1 = __importDefault(require("lodash/isNil"));
var size_1 = __importDefault(require("lodash/size"));
window.customDimensions = [];
var setMatomoConfig = function setMatomoConfig(matomoConfig) {
  var _a;
  // Initialize Matomo tracker
  console.log('matomoConfig', matomoConfig);
  var scriptId = 'matomo-script';
  if (!(0, isNil_1["default"])(matomoConfig.matomoUrl) && !(0, isNil_1["default"])(matomoConfig.matomoSiteId) && !(0, isNil_1["default"])(document.getElementById(scriptId))) {
    console.log('set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = "".concat(matomoConfig.matomoUrl, "matomo.js");
    document.body.appendChild(script);
    window._paq = window._paq || [];
    window._paq.push(['disableCookies', false]);
    // window._paq.push(['setCookieDomain', '*.conceptboard.com'])
    // window._paq.push(['setDomains', '*.conceptboard.com'])
    window._paq.push(['enableCrossDomainLinking']);
    window._paq.push(['setDoNotTrack', true]);
    window._paq.push(['setTrackerUrl', "".concat(matomoConfig.matomoUrl, "matomo.php")]);
    window._paq.push(['setSiteId', matomoConfig.matomoSiteId]);
  }
  if ((0, size_1["default"])(matomoConfig.customDimensions) > 0) {
    (_a = matomoConfig.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
      window.customDimensions.push(customDimension);
    });
    console.log('customDimensions', matomoConfig.customDimensions, window.customDimensions);
  }
};
exports.setMatomoConfig = setMatomoConfig;
/**
 * set custom dimension
 * @param customDimensioncustomDimensions
 */
var setCustomDimension = function setCustomDimension(customDimension) {
  if (!!window._paq) {
    window._paq.push(['setCustomDimension', customDimension.id, customDimension.value]);
  }
};
/**
 * track page view
 * @param params
 */
var trackPageView = function trackPageView(params) {
  var _a;
  console.log('start-page-track', params);
  if (!!window._paq) {
    console.log('customDimensions-local-2', window.customDimensions);
    if ((0, size_1["default"])(window.customDimensions) > 0) {
      (_a = window.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
        setCustomDimension(customDimension);
      });
    }
    if (params === null || params === void 0 ? void 0 : params.href) window._paq.push(['setCustomUrl', params.href]);
    if (params === null || params === void 0 ? void 0 : params.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle]);
    window._paq.push(['trackPageView']);
    console.log('end-page-track');
  }
};
/**
 * track event
 * @param params
 */
var trackEvent = function trackEvent(params) {
  console.log('track-event', params);
};
/**
 * track site search
 * @param params
 */
var trackSiteSearch = function trackSiteSearch(params) {
  console.log('track-search', params);
};
/**
 * track link
 * @param params
 */
var trackLink = function trackLink(params) {
  console.log('track-link', params);
};
/**
 * matomo track
 * @param matomoInfo
 */
var setMatomoTracking = function setMatomoTracking(matomoInfo) {
  console.log('track');
  if (matomoInfo.type === 'track-page') {
    trackPageView(matomoInfo.info);
  } else if (matomoInfo.type === 'track-event') {
    trackEvent(matomoInfo.info);
  } else if (matomoInfo.type === 'track-search') {
    trackSiteSearch(matomoInfo.info);
  } else if (matomoInfo.type === 'track-link') {
    trackLink(matomoInfo.info);
  }
};
exports.setMatomoTracking = setMatomoTracking;