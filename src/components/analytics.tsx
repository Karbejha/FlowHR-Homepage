'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics tracking ID - replace with your actual GA4 measurement ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || 'G-XXXXXXXXXX'

// Hotjar tracking ID
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || '6507622'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Track page views
      ;(window as any).gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_dimension_1': 'user_type',
              'custom_dimension_2': 'page_category'
            }
          });

          // Track scroll depth
          let scrollDepth = 0;
          let maxScroll = 0;
          
          window.addEventListener('scroll', function() {
            scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollDepth > maxScroll) {
              maxScroll = scrollDepth;
              
              // Track scroll milestones
              if (maxScroll >= 25 && maxScroll < 50) {
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: '25%',
                  value: 25
                });
              } else if (maxScroll >= 50 && maxScroll < 75) {
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement', 
                  event_label: '50%',
                  value: 50
                });
              } else if (maxScroll >= 75 && maxScroll < 90) {
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: '75%', 
                  value: 75
                });
              } else if (maxScroll >= 90) {
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: '90%',
                  value: 90
                });
              }
            }
          }, { passive: true });

          // Track form submissions
          document.addEventListener('submit', function(e) {
            if (e.target.tagName === 'FORM') {
              gtag('event', 'form_submit', {
                event_category: 'engagement',
                event_label: e.target.id || 'unknown_form'
              });
            }
          });

          // Track CTA clicks
          document.addEventListener('click', function(e) {
            const target = e.target;
            if (target.matches('a[href*="pricing"], a[href*="demo"], a[href*="trial"]')) {
              gtag('event', 'cta_click', {
                event_category: 'conversion',
                event_label: target.textContent.trim(),
                event_action: 'click'
              });
            }
          });
        `}
      </Script>

      {/* Microsoft Clarity (optional) */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
        `}
      </Script>

      {/* Hotjar Tracking Code for https://flowhr.karbejha.site */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  )
}

// Helper function to report Web Vitals to Google Analytics
function reportWebVital(metric: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      custom_parameter_1: metric.navigationType,
    })
  }
}

// Export function for manual event tracking
export function trackEvent(
  action: string,
  category: string = 'engagement',
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
