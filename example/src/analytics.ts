type EventProps = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
    op?: (method: 'track', event: string, props?: EventProps) => void;
    gtag?: (command: 'event', event: string, props?: EventProps) => void;
  }
}

// Fans one event out to Plausible, OpenPanel and GA4. GA4 is only defined
// when index.html has a measurement ID (GA4_MEASUREMENT_ID).
export function track(event: string, props: EventProps = {}): void {
  window.plausible?.(event, { props });
  window.op?.('track', event, props);
  window.gtag?.('event', event, props);
}
