export {}

declare global {
  interface Window {
    _paq: any
    customDimensions: any[]
  }
}

// Check if window object is available (browser environment)
if (typeof window !== 'undefined') {
  window.customDimensions = []
}
