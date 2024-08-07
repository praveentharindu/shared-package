import size from 'lodash/size'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

declare global {
  interface Window {
    _paq: any
  }
}

export interface ICustomMetricContext {
  setCustomMetric: (metricInfo: any) => void
}

export interface MatomoProviderProps {
  children: ReactNode
  metricConfig: any
}

const CustomMetricContext = createContext<ICustomMetricContext>({} as ICustomMetricContext)

export const useCustomMetric = () => useContext(CustomMetricContext)

export const CustomMetricProvider: React.FC<MatomoProviderProps> = ({ children, metricConfig }) => {
  const [matomoCustomDimensions, setMatomoCustomDimensions] = useState<any>([])
  const [customDimensions, setCustomDimensions] = useState<any>([])

  useEffect(() => {
    console.log('set-config', metricConfig)
    if (size(metricConfig.customDimensions) > 0) {
      setCustomDimensions(metricConfig.customDimensions)
      console.log('customDimensions-set', metricConfig.customDimensions)
    }
  }, [metricConfig])

  const setCustomMetric = (metricInfo: any) => {
    console.log('set custom metrics', metricInfo, customDimensions)
  }

  const customMetric = {
    setCustomMetric,
  }

  return (
    <CustomMetricContext.Provider value={customMetric}>{children}</CustomMetricContext.Provider>
  )
}
