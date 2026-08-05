import { FaThLarge, FaSlidersH, FaSyncAlt, FaHeadset, FaTh, FaFileAlt, FaChartPie, FaBootstrap, FaCocktail, FaCss3, FaCode, FaMapMarkerAlt } from 'react-icons/fa';

export default function KeyFeatures() {
  const features = [
    { icon: <FaThLarge />, title: "AI CRM Assistant", desc: "Use an intelligent AI assistant to answer business questions, generate invoices, analyze sales, and provide instant business insights." },
    { icon: <FaSlidersH />, title: "Lead Management", desc: "Efficiently capture, nurture, and convert leads through our intuitive management system." },
    { icon: <FaSyncAlt />, title: "Sales Pipeline", desc: "Track and manage your sales process from initial contact to closing deals." },
    { icon: <FaHeadset />, title: "Customer Management", desc: "Manage and support your customers effectively with our comprehensive system." },
    { icon: <FaTh />, title: "Inventory Management", desc: "Efficiently manage your inventory with real-time tracking and reporting." },
    { icon: <FaFileAlt />, title: "POS & Billing", desc: "Streamline your point-of-sale and billing processes with our integrated solution." },
    { icon: <FaChartPie />, title: "HR & Payroll", desc: "Comprehensive human resources and payroll management tools." },
    { icon: <FaBootstrap />, title: "Accounting & Finance", desc: "Comprehensive accounting and financial management tools." },
    { icon: <FaCocktail />, title: "Marketing Automation", desc: "Automate your marketing efforts with our intelligent platform." },
    { icon: <FaCss3 />, title: "AI Sales Prediction", desc: "Leverage AI to predict sales trends and optimize your strategy." },
    { icon: <FaCode />, title: "Analytics Dashboard", desc: "Gain valuable insights with our comprehensive analytics dashboard." },
    { icon: <FaMapMarkerAlt />, title: "Multi-Tenant Security", desc: "Ensure data isolation and security with our multi-tenant architecture." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2">Feature</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Key feature</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our platform offers a comprehensive suite of features designed to enhance your experience. From a wide range of page templates and UI components to regular updates and dedicated support, we ensure that you have the tools you need for success. Explore our smart dashboards, well-documented resources, and advanced charting capabilities, all built on the latest technologies like Bootstrap and SASS. With easy customization options and integrated mapping solutions, our features are tailored to meet your diverse needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="text-4xl text-orange-400 mb-4 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}