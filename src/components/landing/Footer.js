import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#282727b9] border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">CRACK404</h3>
            <p className="text-gray-400 mb-6 text-sm">Building Secure Digital Solutions.</p>
            <div className="text-gray-400 text-sm space-y-2">
              <p>House 12, Road 4, Sylhet</p>
              <p>Phone: +880 1XXX-XXXXXX</p>
              <p>Email: info@crack404.com</p>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Business OS</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">AI CRM Assistant</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Smart POS</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">HRM & Accounting</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="https://linkedin.com/company/crack404" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://facebook.com/crack404" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Facebook</a>
              </li>
              <li>
                <a href="https://github.com/crack404" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="https://www.crack404.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Website</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2026 Crack404. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built in Sylhet, Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
}