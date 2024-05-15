// MatomoSetup.ts

import { size, isNil } from 'lodash';
import './global';

function setMatomoConfig(matomoConfig: any) {
  // Initialize Matomo tracker
  console.log('matomoConfig', matomoConfig);
  const scriptId = 'matomo-script';
  if (
    !isNil(matomoConfig.matomoUrl) &&
    !isNil(matomoConfig.matomoSiteId) &&
    !isNil(document.getElementById(scriptId))
  ) {
    console.log('set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `${matomoConfig.matomoUrl}matomo.js`;
    document.body.appendChild(script);

    window._paq = window._paq || [];
    window._paq.push(['disableCookies', false]);
    window._paq.push(['enableCrossDomainLinking']);
    window._paq.push(['setDoNotTrack', true]);

    window._paq.push(['setTrackerUrl', `${matomoConfig.matomoUrl}matomo.php`]);
    window._paq.push(['setSiteId', matomoConfig.matomoSiteId]);
  }

  if (size(matomoConfig.customDimensions) > 0) {
    matomoConfig.customDimensions?.forEach((customDimension: any) => {
      window.customDimensions.push(customDimension);
    });
    console.log('customDimensions', matomoConfig.customDimensions, window.customDimensions);
  }
}

/**
 * set custom dimension
 * @param customDimensioncustomDimensions
 */
function setCustomDimension(customDimension: any) {
  if (!!window._paq) {
    window._paq.push(['setCustomDimension', customDimension.id, customDimension.value]);
  }
}

/**
 * track page view
 * @param params
 */
function trackPageView(params?: any) {
  console.log('start-page-track', params);
  if (!!window._paq) {
    console.log('customDimensions-local-2', window.customDimensions);
    if (size(window.customDimensions) > 0) {
      window.customDimensions?.forEach((customDimension: any) => {
        setCustomDimension(customDimension);
      });
    }
    if (params?.href) window._paq.push(['setCustomUrl', params.href]);
    if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle]);
    window._paq.push(['trackPageView']);
    console.log('end-page-track');
  }
}

/**
 * track event
 * @param params
 */
function trackEvent(params?: any) {
  console.log('track-event', params);
}

/**
 * track site search
 * @param params
 */
function trackSiteSearch(params?: any) {
  console.log('track-search', params);
}

/**
 * track link
 * @param params
 */
function trackLink(params?: any) {
  console.log('track-link', params);
}

/**
 * matomo track
 * @param matomoInfo
 */
 function setMatomoTracking(matomoInfo: any) {
  console.log('track')
  if (matomoInfo.type === 'track-page') {
    trackPageView(matomoInfo.info)
  } else if (matomoInfo.type === 'track-event') {
    trackEvent(matomoInfo.info)
  } else if (matomoInfo.type === 'track-search') {
    trackSiteSearch(matomoInfo.info)
  } else if (matomoInfo.type === 'track-link') {
    trackLink(matomoInfo.info)
  }
}

export {
  setMatomoConfig,
  setCustomDimension,
  trackPageView,
  trackEvent,
  trackSiteSearch,
  trackLink,
  setMatomoTracking
};
