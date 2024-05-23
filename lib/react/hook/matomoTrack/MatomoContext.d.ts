import React, { ReactNode } from 'react';
declare global {
    interface Window {
        _paq: any;
    }
}
export interface IMatomoContext {
    setMatomoTrack: (matomoInfo: any) => void;
}
export interface IMatomoConfig {
    matomoUrl: string;
    matomoSiteId: any;
    customDimensions?: ICustomDimension[];
}
export interface ICustomDimension {
    id: number;
    value: string;
}
export interface IMatomoTrack {
    type: 'track-page' | 'track-event' | 'track-search' | 'track-link';
    info: IMatomoTrackPage | IMatomoTrackPage;
}
export interface IMatomoTrackPage {
    href: string;
    documentTitle: string;
}
export interface IMatomoTrackEvent {
    category: string;
    action: string;
    value: string;
}
export interface MatomoProviderProps {
    children: ReactNode;
    matomoConfig: IMatomoConfig;
}
export declare const useMatomo: () => IMatomoContext;
export declare const MatomoProvider: React.FC<MatomoProviderProps>;
