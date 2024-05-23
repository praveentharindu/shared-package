import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import isNil from 'lodash/isNil'
import size from 'lodash/size'

declare global {
  interface Window {
    _paq: any
  }
}

export interface IMatomoContext {
  setMatomoTrack: (matomoInfo: any) => void
}

export interface IMatomoConfig {
  matomoUrl: string
  matomoSiteId: any
  customDimensions?: ICustomDimension[]
}

export interface ICustomDimension {
  id: number
  value: string
}
export interface IMatomoTrack {
  type: 'track-page' | 'track-event' | 'track-search' | 'track-link'
  info: IMatomoTrackPage | IMatomoTrackPage
}

export interface IMatomoTrackPage {
  href: string
  documentTitle: string
}

export interface IMatomoTrackEvent {
  category: string
  action: string
  value: string
}

export interface MatomoProviderProps {
  children: ReactNode
  matomoConfig: IMatomoConfig
}

const MatomoContext = createContext<IMatomoContext>({} as IMatomoContext)

export const useMatomo = () => useContext(MatomoContext)

export const MatomoProvider: React.FC<MatomoProviderProps> = ({ children, matomoConfig }) => {
  const [customDimensions, setCustomDimensions] = useState<any>([])

  useEffect(() => {
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
      setCustomDimensions(matomoConfig.customDimensions)
      console.log('customDimensions-set', matomoConfig.customDimensions)
    }
  }, [matomoConfig])

  /**
   * set custom dimension
   * @param customDimensioncustomDimensions
   */
  const setCustomDimension = (customDimension: ICustomDimension) => {
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
      if (size(customDimensions) > 0) {
        console.log('customDimensions-page-track', customDimensions)
        customDimensions?.forEach((customDimension: any) => {
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
    if (size(customDimensions) > 0) {
      console.log('customDimensions-event-track', customDimensions)
      customDimensions?.forEach((customDimension: any) => {
        setCustomDimension(customDimension)
      })
    }
    if (params?.href) window._paq.push(['setCustomUrl', params.href])
    if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
    window._paq.push(['trackEvent', params?.category, params?.action, params?.value])
    console.log('end-track-event', params)
  }

  /**
   * track site search
   * @param params
   */
  const trackSiteSearch = (params?: any) => {
    console.log('start-track-search', params)
    if (size(customDimensions) > 0) {
      console.log('customDimensions-event-track', customDimensions)
      customDimensions?.forEach((customDimension: any) => {
        setCustomDimension(customDimension)
      })
    }
    if (params?.href) window._paq.push(['setCustomUrl', params.href])
    if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
    window._paq.push(['trackEvent', params?.keyword, params?.category, params?.resultsCount])
    console.log('end-track-search', params)
  }

  /**
   * matomo track
   * @param matomoInfo
   */
  const setMatomoTrack = (matomoInfo: IMatomoTrack) => {
    console.log('track', matomoInfo)
    if (matomoInfo.type === 'track-page') {
      trackPageView(matomoInfo.info)
    } else if (matomoInfo.type === 'track-event') {
      trackEvent(matomoInfo.info)
    } else if (matomoInfo.type === 'track-search') {
      trackSiteSearch(matomoInfo.info)
    }
  }

  const matomo = {
    setMatomoTrack,
  }

  return <MatomoContext.Provider value={matomo}>{children}</MatomoContext.Provider>
}
