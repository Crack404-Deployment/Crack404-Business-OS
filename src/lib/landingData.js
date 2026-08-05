import { Code, Zap, Star, Layers, Globe, BarChart3 } from 'lucide-react';

export const floatingIcons = [
  { id: 1, label: 'Next.js', top: '20%', left: '10%', delay: 0 },
  { id: 2, label: 'PostgreSQL', top: '60%', right: '15%', delay: 0.2 },
  { id: 3, label: 'Redis', top: '40%', left: '5%', delay: 0.4 },
  { id: 4, label: 'Tailwind', bottom: '20%', right: '10%', delay: 0.6 },
  { id: 5, label: 'Django', top: '30%', right: '8%', delay: 0.3 },
  { id: 6, label: 'Cloudflare', bottom: '30%', left: '12%', delay: 0.5 },
];

export const statisticsCards = [
  { number: '10+', label: 'Core Enterprise Modules', icon: Layers },
  { number: '15+', label: 'Specialized AI Models', icon: Zap },
  { number: '100%', label: 'Tenant Data Isolation', icon: Globe },
  { number: '250+', label: 'Database Tables', icon: Code },
];

export const demoCards = [
  { title: 'AI CRM Assistant', image: '/ai.png' },
  { title: 'Advanced POS', image: '/crm.png' },
  { title: 'Inventory & Stock', image: '/crypto.png' },
  { title: 'Sales Pipeline', image: '/dashboard.png' }, 
  { title: 'HRM & Payroll', image: '/investment.png' },
  { title: 'Financial Accounting', image: '/dashboard2.png' }, // Add your real accounting image here
  { title: 'Marketing Automation', image: '/ecommerce.png' }, // Add your real marketing image here
];

export const faqItems = [
  {
    id: 1,
    question: 'How secure is my company data on Crack404 Business OS?',
    answer: 'Security is our top priority. We use a strict multi-tenant architecture where every organization, branch, and department has complete data isolation. No company can access another company\'s data, and all access is governed by Role-Based Access Control (RBAC).',
  },
  {
    id: 2,
    question: 'Does the system work offline?',
    answer: 'Yes, our POS (Point of Sale) module includes a dedicated offline mode. This ensures your retail branches can continue scanning barcodes, printing receipts, and processing sales without interruption, automatically syncing inventory once the internet connection is restored.',
  },
  {
    id: 3,
    question: 'What kind of AI features are included?',
    answer: 'Instead of one generic model, we built specialized AI models for your business. This includes an AI CRM Assistant that answers natural language queries, AI Sales Prediction for expected revenue, AI Lead Scoring, and an AI Inventory engine that forecasts out-of-stock risks.',
  },
  {
    id: 4,
    question: 'Can I manage multiple branches of my business?',
    answer: 'Absolutely. The platform is built to handle complex organizational structures. You can seamlessly manage multiple branches, departments, and user roles (like Cashiers, HR, Sales, and Managers) from a single Company Owner or Super Admin account.',
  },
  {
    id: 5,
    question: 'Is there an automated accounting feature?',
    answer: 'Yes, our AI Accounting module categorizes expenses, detects potential fraud, and predicts cash flow. It operates alongside our standard financial tools which include ledger management, GST/VAT tracking, and automated balance sheet generation.',
  },
  {
    id: 6,
    question: 'How do subscriptions and billing work?',
    answer: 'We offer flexible subscription plans managed securely via Stripe. You can easily upgrade or downgrade your plan, track payment histories, utilize coupons, and monitor your usage meter directly from your billing dashboard.',
  }
];