import './global';
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
declare const trackPageView: (params?: any) => void;
/**
 * track event
 * @param params
 */
declare const trackEvent: (params?: any) => void;
/**
 * track site search
 * @param params
 */
declare const trackSiteSearch: (params?: any) => void;
/**
 * matomo track
 * @param matomoInfo
 */
declare function setMatomoTracking(matomoInfo: any): void;
export { setMatomoConfig, setCustomDimension, trackPageView, trackEvent, trackSiteSearch, setMatomoTracking, };
