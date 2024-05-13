"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatomoProvider = exports.useMatomo = void 0;
var react_1 = __importStar(require("react"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var size_1 = __importDefault(require("lodash/size"));
var MatomoContext = (0, react_1.createContext)({});
var useMatomo = function () { return (0, react_1.useContext)(MatomoContext); };
exports.useMatomo = useMatomo;
var MatomoProvider = function (_a) {
    var children = _a.children, matomoConfig = _a.matomoConfig;
    var _b = (0, react_1.useState)([]), customDimensions = _b[0], setCustomDimensions = _b[1];
    (0, react_1.useEffect)(function () {
        console.log('matomoConfig', matomoConfig);
        var scriptId = 'matomo-script';
        if (!(0, isNil_1.default)(matomoConfig.matomoUrl) &&
            !(0, isNil_1.default)(matomoConfig.matomoSiteId) &&
            !(0, isNil_1.default)(document.getElementById(scriptId))) {
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
        if ((0, size_1.default)(matomoConfig.customDimensions) > 0) {
            setCustomDimensions(matomoConfig.customDimensions);
            console.log('customDimensions', matomoConfig.customDimensions);
        }
    }, [matomoConfig]);
    var trackPageView = function (params) {
        console.log('start-page-track', params);
        if (!!window._paq) {
            console.log('customDimensions-local-2', customDimensions);
            if (params === null || params === void 0 ? void 0 : params.href)
                window._paq.push(['setCustomUrl', params.href]);
            if (params === null || params === void 0 ? void 0 : params.documentTitle)
                window._paq.push(['setDocumentTitle', params.documentTitle]);
            window._paq.push(['trackPageView']);
            console.log('end-page-track');
        }
    };
    /**
     * track event
     * @param params
     */
    var trackEvent = function (params) {
        console.log('track-event', params);
    };
    /**
     * track site search
     * @param params
     */
    var trackSiteSearch = function (params) {
        console.log('track-search', params);
    };
    /**
     * track link
     * @param params
     */
    var trackLink = function (params) {
        console.log('track-link', params);
    };
    /**
     * matomo track
     * @param matomoInfo
     */
    var setMatomoTrack = function (matomoInfo) {
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
    };
    var matomo = {
        setMatomoTrack: setMatomoTrack,
    };
    return react_1.default.createElement(MatomoContext.Provider, { value: matomo }, children);
};
exports.MatomoProvider = MatomoProvider;
