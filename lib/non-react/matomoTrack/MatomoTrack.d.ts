import "./global";
declare function setMatomoConfig(matomoConfig: any): void;
/**
 * set custom dimension
 * @param customDimensioncustomDimensions
 */
declare function setCustomDimension(customDimension: any): void;
/**
 * track page view
 * @param params
 */
declare function trackPageView(params?: any): void;
/**
 * track event
 * @param params
 */
declare function trackEvent(params?: any): void;
/**
 * track site search
 * @param params
 */
declare function trackSiteSearch(params?: any): void;
/**
 * track link
 * @param params
 */
declare function trackLink(params?: any): void;
/**
 * matomo track
 * @param matomoInfo
 */
declare function setMatomoTracking(matomoInfo: any): void;
export { setMatomoConfig, setCustomDimension, trackPageView, trackEvent, trackSiteSearch, trackLink, setMatomoTracking, };
