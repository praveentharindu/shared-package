import React, { ReactNode } from 'react';
declare global {
    interface Window {
        _paq: any;
    }
}
export interface ICustomMetricContext {
    setCustomMetric: (metricInfo: any) => void;
}
export interface MatomoProviderProps {
    children: ReactNode;
    metricConfig: any;
}
export declare const useCustomMetric: () => ICustomMetricContext;
export declare const CustomMetricProvider: React.FC<MatomoProviderProps>;
