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

  useEffect(() => {
    console.log('set-config', metricConfig)
  }, [metricConfig])

  const setCustomMetric = () => {
    console.log('set custom metrics')
  }

  const customMetric = {
    setCustomMetric,
  }

  return (
    <CustomMetricContext.Provider value={customMetric}>{children}</CustomMetricContext.Provider>
  )
}
