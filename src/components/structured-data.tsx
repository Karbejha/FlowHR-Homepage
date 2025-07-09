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
        "name": "What is FlowHR and how does it help businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FlowHR is a comprehensive HR management system that streamlines all aspects of human resources operations. It helps businesses manage employee data, track attendance, process leave requests, generate payroll, monitor performance, and provide detailed analytics - all in one integrated platform."
        }
      },
      {
        "@type": "Question",
        "name": "Can I manage multiple teams and departments with FlowHR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FlowHR supports unlimited teams and departments. You can organize employees into different teams, set team-specific permissions, track performance across all departments, and manage complex organizational structures with our comprehensive team management features."
        }
      },
      {
        "@type": "Question",
        "name": "How does FlowHR's leave management system work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our leave management system allows employees to request time off through a user-friendly portal, managers can approve or deny requests with workflow automation, and the system automatically tracks leave balances, accruals, and generates reports for compliance and planning purposes."
        }
      },
      {
        "@type": "Question",
        "name": "Is FlowHR suitable for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! FlowHR is designed to scale with your business. We offer affordable plans starting at $29/month for small businesses, with all the essential HR features you need. As your company grows, you can easily upgrade to access more advanced features."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is employee data in FlowHR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is our top priority. FlowHR uses enterprise-grade encryption, role-based access control, and follows SOC 2 compliance standards. All data is encrypted both in transit and at rest, with regular security audits, GDPR compliance, and strict data privacy controls."
        }
      },
      {
        "@type": "Question",
        "name": "What integrations does FlowHR support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FlowHR integrates with popular tools like Slack, Microsoft Teams, Google Workspace, QuickBooks, ADP, and many payroll systems. We also provide a comprehensive REST API for custom integrations with your existing business tools and third-party applications."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile access for employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer native mobile apps for both iOS and Android, plus a fully responsive web interface. Employees can clock in/out, request leave, view schedules, access pay stubs, update personal information, and receive notifications from anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of HR analytics and reporting does FlowHR provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FlowHR provides comprehensive analytics including employee turnover rates, attendance patterns, leave trends, performance metrics, cost per hire, time-to-fill positions, and custom reports. All data can be exported and visualized through interactive dashboards."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement FlowHR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation typically takes 1-2 weeks for small to medium businesses. This includes data migration, system configuration, user training, and testing. Our onboarding team provides dedicated support throughout the process to ensure a smooth transition."
        }
      },
      {
        "@type": "Question",
        "name": "What support options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive support including email support for all plans, priority support for Pro users, dedicated account managers for Enterprise customers, extensive documentation, video tutorials, live chat assistance, and free onboarding training sessions."
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
