export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlowHR",
    "description": "Revolutionary HR Management System for modern businesses",
    "url": "https://flowhr-homepage.vercel.app",
    "logo": "https://flowhr-homepage.vercel.app/logo.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "support@flowhr.com"
    },
    "sameAs": [
      "https://twitter.com/flowhr",
      "https://linkedin.com/company/flowhr",
      "https://facebook.com/flowhr"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FlowHR",
    "description": "Comprehensive HR Management System with employee management, leave tracking, attendance monitoring, and analytics",
    "url": "https://flowhr-homepage.vercel.app",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FlowHR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FlowHR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FlowHR is a comprehensive HR management system that helps businesses streamline their human resources operations, including employee management, leave tracking, attendance monitoring, and performance analytics."
        }
      },
      {
        "@type": "Question",
        "name": "How does FlowHR help with employee management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FlowHR provides comprehensive employee profiles, role management, organizational structure visualization, automated onboarding processes, and performance tracking tools."
        }
      },
      {
        "@type": "Question",
        "name": "Is FlowHR suitable for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FlowHR is designed to scale with your business. We offer plans suitable for small businesses starting from just $29/month, with features that grow as your team expands."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
