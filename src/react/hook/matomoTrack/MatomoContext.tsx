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
  info: any
}

const MatomoContext = createContext<IMatomoContext>({} as IMatomoContext)

export const useMatomo = () => useContext(MatomoContext)

interface MatomoProviderProps {
  children: ReactNode
  matomoConfig: IMatomoConfig
}

export const MatomoProvider: React.FC<MatomoProviderProps> = ({ children, matomoConfig }) => {
  const [customDimensions, setCustomDimensions] = useState<any>([])

  useEffect(() => {
    console.log('matomoConfig', matomoConfig)
    const scriptId = 'matomo-script'
    if (
      !isNil(matomoConfig.matomoUrl) &&
      !isNil(matomoConfig.matomoSiteId) &&
      !isNil(document.getElementById(scriptId))
    ) {
      console.log('set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId)
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
      console.log('customDimensions', matomoConfig.customDimensions)
    }
  }, [matomoConfig])

  const trackPageView = (params?: any) => {
    console.log('start-page-track', params)
    if (!!window._paq) {
      console.log('customDimensions-local-2', customDimensions)
      if (params?.href) window._paq.push(['setCustomUrl', params.href])
      if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
      window._paq.push(['trackPageView'])
      console.log('end-page-track')
    }
  }

  /**
   * track event
   * @param params
   */
  const trackEvent = (params?: any) => {
    console.log('track-event', params)
  }

  /**
   * track site search
   * @param params
   */
  const trackSiteSearch = (params?: any) => {
    console.log('track-search', params)
  }

  /**
   * track link
   * @param params
   */
  const trackLink = (params?: any) => {
    console.log('track-link', params)
  }

  /**
   * matomo track
   * @param matomoInfo
   */
  const setMatomoTrack = (matomoInfo: IMatomoTrack) => {
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

  const matomo = {
    setMatomoTrack,
  }

  return <MatomoContext.Provider value={matomo}>{children}</MatomoContext.Provider>
}
