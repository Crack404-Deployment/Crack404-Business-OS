'use client';
import { useState } from 'react';
import { 
  Package, Search, Filter, Plus, Edit, Trash2, MoreVertical, 
  AlertTriangle, Download, ChevronLeft, ChevronRight, CheckSquare, 
  Image as ImageIcon, Box, DollarSign, ArrowUpRight
} from 'lucide-react';

export default function Products() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState(new Set());

  // --- MOCK INVENTORY DATA ---
  const products = [
    { id: "P-101", name: "AJAZZ AK820 Mechanical Keyboard", sku: "AJ-820-BLK", category: "Peripherals", cost: 55.00, price: 85.00, stock: 14, minStock: 10, status: "In Stock" },
    { id: "P-102", name: "Aluminum Laptop Stand", sku: "TS-STAND-ALU", category: "Accessories", cost: 20.00, price: 45.50, stock: 8, minStock: 15, status: "Low Stock" },
    { id: "P-103", name: "Logitech MX Master 3S", sku: "LOG-MX3S-GRY", category: "Peripherals", cost: 75.00, price: 110.00, stock: 6, minStock: 5, status: "In Stock" },
    { id: "P-104", name: "Sony WH-1000XM5 Headphones", sku: "SNY-XM5-BLK", category: "Audio", cost: 280.00, price: 380.00, stock: 0, minStock: 5, status: "Out of Stock" },
    { id: "P-105", name: "Samsung Odyssey 27\" Monitor", sku: "SAM-G7-27", category: "Monitors", cost: 420.00, price: 590.00, stock: 3, minStock: 3, status: "Low Stock" },
    { id: "P-106", name: "Anker GaNPrime 100W", sku: "ANK-100W-GAN", category: "Accessories", cost: 25.00, price: 55.00, stock: 42, minStock: 20, status: "In Stock" },
    { id: "P-107", name: "RTX 4070 Ti Super 16GB", sku: "ROG-4070TIS", category: "Components", cost: 810.00, price: 980.00, stock: 2, minStock: 2, status: "Low Stock" },
    { id: "P-108", name: "WD Black SN850X 2TB SSD", sku: "WD-SN850X-2T", category: "Storage", cost: 120.00, price: 175.00, stock: 18, minStock: 10, status: "In Stock" },
  ];

  const filteredProducts = products.filter(p => 
    (categoryFilter === "All" || p.category === categoryFilter) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id) => {
    const newSet = new Set(selectedProducts);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedProducts(newSet);
  };

  const fmt = (n) => `$${Number(n).toFixed(2)}`;
  const calcMargin = (cost, price) => (((price - cost) / price) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Master Product Catalog</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage SKUs, pricing, margins, and stock alerts.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-50 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold hover:border-orange-400 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Export
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </div>

        {/* ================= KPI CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Package className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Total SKUs</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">1,248</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><DollarSign className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Inventory Value</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">$245,890</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl"><AlertTriangle className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Low Stock Items</p>
            </div>
            <h3 className="text-2xl font-black text-amber-600 mt-2">42</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl"><Box className="w-5 h-5" /></div>
                <p className="text-sm font-bold text-slate-500">Out of Stock</p>
              </div>
            </div>
            <h3 className="text-2xl font-black text-rose-600 mt-2">14</h3>
          </div>
        </div>

        {/* ================= DATA TABLE ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {selectedProducts.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold animate-pulse">
                  <span>{selectedProducts.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Update Stock</button>
                  <button className="hover:text-orange-900">Print Barcodes</button>
                  <button className="hover:text-red-600">Delete</button>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select 
                    value={categoryFilter} 
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:border-orange-500 transition-all"
                  >
                    <option value="All">All Categories</option>
                    <option value="Peripherals">Peripherals</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Monitors">Monitors</option>
                    <option value="Audio">Audio</option>
                    <option value="Components">Components</option>
                    <option value="Storage">Storage</option>
                  </select>
                </div>
              )}
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products by name or SKU..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="bg-white border border-slate-300 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1100px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelectedProducts(selectedProducts.size === filteredProducts.length ? new Set() : new Set(filteredProducts.map(p => p.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selectedProducts.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">Product Detail</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Financials (Cost / Price)</th>
                  <th className="px-4 py-4">Stock Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className={`hover:bg-slate-50 transition-colors group ${selectedProducts.has(product.id) ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(product.id)}>
                        <CheckSquare className={`w-5 h-5 transition-colors ${selectedProducts.has(product.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                          <ImageIcon className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{product.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400">COST</p>
                          <p className="text-sm font-medium text-slate-700">{fmt(product.cost)}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400">PRICE</p>
                          <p className="text-sm font-black text-slate-900">{fmt(product.price)}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400">MARGIN</p>
                          <p className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" /> {calcMargin(product.cost, product.price)}%
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16">
                          <p className="text-sm font-black text-slate-900">{product.stock}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase">Min: {product.minStock}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap ${
                          product.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          product.status === 'Low Stock' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-600 rounded-lg transition-all shadow-sm"><Edit className="w-4 h-4" /></button>
                        <button className="p-2 bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 text-slate-600 rounded-lg transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                        <button className="p-2 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-600 rounded-lg transition-all shadow-sm"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
            <span className="text-sm font-medium text-slate-500">Showing <span className="font-bold text-slate-900">1</span> to <span className="font-bold text-slate-900">{filteredProducts.length}</span> of <span className="font-bold text-slate-900">1,248</span> entries</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center"><ChevronLeft className="w-4 h-4" /> Prev</button>
              <button className="px-3 py-1.5 bg-orange-600 text-white font-bold rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50">2</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center">Next <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}