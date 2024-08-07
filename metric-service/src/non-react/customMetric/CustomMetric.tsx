import isNil from 'lodash/isNil'
import size from 'lodash/size'

import './global'

if (!isNil(typeof window)) {
  window.customDimensions = []
}

function setMatomoConfig(matomoConfig: any) {
  // Initialize Matomo tracker
  console.log('Initialize-matomoConfig', matomoConfig)
  const scriptId = 'matomo-script'
  if (
    !isNil(matomoConfig.matomoUrl) &&
    !isNil(matomoConfig.matomoSiteId) &&
    isNil(document.getElementById(scriptId))
  ) {
    console.log('matomoConfig-set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId)
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    script.src = `${matomoConfig.matomoUrl}matomo.js`
    document.body.appendChild(script)

    window._paq = window._paq || []
    window._paq.push(['disableCookies', false])
    window._paq.push(['enableCrossDomainLinking'])
    window._paq.push(['setDoNotTrack', true])
    window._paq.push(['setTrackerUrl', `${matomoConfig.matomoUrl}matomo.php`])
    window._paq.push(['setSiteId', matomoConfig.matomoSiteId])
  }

  if (size(matomoConfig.customDimensions) > 0) {
    matomoConfig.customDimensions?.forEach((customDimension: any) => {
      window.customDimensions.push(customDimension)
    })
    console.log('customDimensions', matomoConfig.customDimensions, window.customDimensions)
  }
}

/**
 * set custom dimension
 * @param customDimensioncustomDimensions
 */
function setCustomDimension(customDimension: any) {
  if (!!window._paq) {
    window._paq.push(['setCustomDimension', customDimension.id, customDimension.value])
  }
}

/**
 * track page view
 * @param params
 */
const trackPageView = (params?: any) => {
  console.log('start-page-track', params)
  if (!!window._paq) {
    if (params?.href) window._paq.push(['setCustomUrl', params.href])
    if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
    if (size(window?.customDimensions) > 0) {
      console.log('customDimensions-page-track', window?.customDimensions)
      window?.customDimensions?.forEach((customDimension: any) => {
        setCustomDimension(customDimension)
      })
    }
    window._paq.push(['trackPageView'])
    console.log('end-page-track')
  }
}

/**
 * track event
 * @param params
 */
const trackEvent = (params?: any) => {
  console.log('start-track-event', params)
  if (!!window._paq) {
    if (size(window?.customDimensions) > 0) {
      console.log('customDimensions-event-track', window?.customDimensions)
      window?.customDimensions?.forEach((customDimension: any) => {
        setCustomDimension(customDimension)
      })
    }
    if (params?.href) window._paq.push(['setCustomUrl', params.href])
    if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
    window._paq.push(['trackEvent', params?.category, params?.action, params?.value])
    console.log('end-track-event', params)
  }
}

/**
 * track site search
 * @param params
 */
const trackSiteSearch = (params?: any) => {
  console.log('start-track-search', params)
  if (!!window._paq) {
    if (size(window?.customDimensions) > 0) {
      console.log('customDimensions-event-track', window?.customDimensions)
      window?.customDimensions?.forEach((customDimension: any) => {
        setCustomDimension(customDimension)
      })
    }
    if (params?.href) window._paq.push(['setCustomUrl', params.href])
    if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
    window._paq.push(['trackEvent', params?.keyword, params?.category, params?.resultsCount])
    console.log('end-track-search', params)
  }
}

/**
 * matomo track
 * @param matomoInfo
 */
function setMatomoTracking(matomoInfo: any) {
  console.log('track', matomoInfo)
  if (matomoInfo.type === 'track-page') {
    trackPageView(matomoInfo.info)
  } else if (matomoInfo.type === 'track-event') {
    trackEvent(matomoInfo.info)
  } else if (matomoInfo.type === 'track-search') {
    trackSiteSearch(matomoInfo.info)
  }
}

const setCustomMetricTracking = (info: any) => {
  console.log('info', info, window.customDimensions)
}

const setMetricConfig = (config: any) => {
  console.log('config', config)
  if (size(config.customDimensions) > 0) {
    config.customDimensions?.forEach((customDimension: any) => {
      window.customDimensions.push(customDimension)
    })
    console.log('customDimensions', config.customDimensions, window.customDimensions)
  }
}

export { setMetricConfig, setCustomDimension, setCustomMetricTracking }
