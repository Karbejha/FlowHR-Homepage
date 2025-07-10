export type Language = 'en' | 'ar' | 'tr';

export interface Translations {
  // Navigation
  home: string;
  features: string;
  pricing: string;
  contact: string;
  login: string;
  getStarted: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startFreeTrial: string;
  learnMore: string;
  
  // Features
  featuresTitle: string;
  featuresSubtitle: string;
  employeeManagement: string;
  employeeManagementDesc: string;
  leaveTracking: string;
  leaveTrackingDesc: string;
  analyticsReports: string;
  analyticsReportsDesc: string;
  securityCompliance: string;
  securityComplianceDesc: string;
  
  // Common
  readMore: string;
  close: string;
  menu: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    contact: 'Contact',
    login: 'Login',
    getStarted: 'Get Started',
    
    // Hero Section
    heroTitle: 'Revolutionary HR Management System',
    heroSubtitle: 'Streamline Your Workforce',
    heroDescription: 'Comprehensive employee management, leave tracking, attendance monitoring, and HR analytics in one powerful platform.',
    startFreeTrial: 'Start Free Trial',
    learnMore: 'Learn More',
    
    // Features
    featuresTitle: 'Powerful Features',
    featuresSubtitle: 'Everything you need to manage your workforce effectively',
    employeeManagement: 'Employee Management',
    employeeManagementDesc: 'Comprehensive employee profiles, role management, and organizational structure visualization.',
    leaveTracking: 'Leave Tracking',
    leaveTrackingDesc: 'Streamlined leave application, approval workflow, and balance tracking system.',
    analyticsReports: 'Analytics & Reports',
    analyticsReportsDesc: 'Real-time attendance monitoring, productivity insights, and comprehensive reporting dashboard.',
    securityCompliance: 'Security & Compliance',
    securityComplianceDesc: 'Enterprise-grade security, data protection, and compliance with global HR regulations.',
    
    // Common
    readMore: 'Read More',
    close: 'Close',
    menu: 'Menu',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    features: 'المميزات',
    pricing: 'التسعير',
    contact: 'اتصل بنا',
    login: 'تسجيل الدخول',
    getStarted: 'ابدأ الآن',
    
    // Hero Section
    heroTitle: 'نظام إدارة الموارد البشرية الثوري',
    heroSubtitle: 'قم بتبسيط قوتك العاملة',
    heroDescription: 'إدارة شاملة للموظفين، تتبع الإجازات، مراقبة الحضور، وتحليلات الموارد البشرية في منصة واحدة قوية.',
    startFreeTrial: 'ابدأ التجربة المجانية',
    learnMore: 'اعرف المزيد',
    
    // Features
    featuresTitle: 'مميزات قوية',
    featuresSubtitle: 'كل ما تحتاجه لإدارة قوتك العاملة بفعالية',
    employeeManagement: 'إدارة الموظفين',
    employeeManagementDesc: 'ملفات تعريف شاملة للموظفين، إدارة الأدوار، وتصور الهيكل التنظيمي.',
    leaveTracking: 'تتبع الإجازات',
    leaveTrackingDesc: 'تطبيق إجازة مبسط، تدفق الموافقة، ونظام تتبع الرصيد.',
    analyticsReports: 'التحليلات والتقارير',
    analyticsReportsDesc: 'مراقبة الحضور في الوقت الفعلي، رؤى الإنتاجية، ولوحة تقارير شاملة.',
    securityCompliance: 'الأمان والامتثال',
    securityComplianceDesc: 'أمان على مستوى المؤسسة، حماية البيانات، والامتثال للوائح الموارد البشرية العالمية.',
    
    // Common
    readMore: 'اقرأ المزيد',
    close: 'إغلاق',
    menu: 'القائمة',
  },
  tr: {
    // Navigation
    home: 'Ana Sayfa',
    features: 'Özellikler',
    pricing: 'Fiyatlandırma',
    contact: 'İletişim',
    login: 'Giriş Yap',
    getStarted: 'Başlayın',
    
    // Hero Section
    heroTitle: 'Devrimci İnsan Kaynakları Yönetim Sistemi',
    heroSubtitle: 'İş Gücünüzü Kolaylaştırın',
    heroDescription: 'Kapsamlı çalışan yönetimi, izin takibi, devam izleme ve İK analitiği tek güçlü platformda.',
    startFreeTrial: 'Ücretsiz Deneme Başlat',
    learnMore: 'Daha Fazla Bilgi',
    
    // Features
    featuresTitle: 'Güçlü Özellikler',
    featuresSubtitle: 'İş gücünüzü etkili bir şekilde yönetmek için ihtiyacınız olan her şey',
    employeeManagement: 'Çalışan Yönetimi',
    employeeManagementDesc: 'Kapsamlı çalışan profilleri, rol yönetimi ve organizasyonel yapı görselleştirmesi.',
    leaveTracking: 'İzin Takibi',
    leaveTrackingDesc: 'Kolaylaştırılmış izin başvurusu, onay iş akışı ve bakiye takip sistemi.',
    analyticsReports: 'Analitik ve Raporlar',
    analyticsReportsDesc: 'Gerçek zamanlı devam izleme, üretkenlik öngörüleri ve kapsamlı raporlama panosu.',
    securityCompliance: 'Güvenlik ve Uyumluluk',
    securityComplianceDesc: 'Kurumsal düzeyde güvenlik, veri koruması ve küresel İK düzenlemelerine uyum.',
    
    // Common
    readMore: 'Devamını Oku',
    close: 'Kapat',
    menu: 'Menü',
  },
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};
