'use client';
import { useState } from 'react';
import { 
  ShoppingBag, Trash2, Printer, Search, Plus, Minus, CreditCard, 
  Banknote, ShieldCheck, QrCode, FileText, CheckCircle2, X, 
  Store, User, Smartphone, Percent, RefreshCw, ChevronRight, Tag, 
  PauseCircle, PlayCircle, SearchCode
} from 'lucide-react';

export default function POSWithBilling() {
  // ================= CORE POS STATE =================
  const [cart, setCart] = useState([]);
  const [heldOrders, setHeldOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posMode, setPosMode] = useState("Sale"); // "Sale" | "Quotation"
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [amountTendered, setAmountTendered] = useState("");
  
  const [customer, setCustomer] = useState({
    name: "Walk-in Customer",
    phone: "+880 1700-000000",
    email: "customer@crack404.com",
    vatBin: "BIN-99201482"
  });

  // Billing Modal State
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [completedInvoice, setCompletedInvoice] = useState(null);

  const taxRate = 0.05; // 5% VAT on IT Products

  // ================= ENHANCED TECH INVENTORY WITH IMAGES =================
  const [products] = useState([
    { id: "P-101", name: "AJAZZ AK820 Mechanical Keyboard", sku: "AJ-820-BLK", category: "Peripherals", price: 85.00, stock: 14, warranty: "1 Year", needsSerial: true, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500" },
    { id: "P-102", name: "Aluminum Laptop Stand", sku: "TS-STAND-ALU", category: "Accessories", price: 45.50, stock: 8, warranty: "6 Months", needsSerial: false, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=500" },
    { id: "P-103", name: "Logitech MX Master 3S", sku: "LOG-MX3S-GRY", category: "Peripherals", price: 110.00, stock: 6, warranty: "1 Year", needsSerial: true, image: "https://images.unsplash.com/photo-1527814050087-15100c403dd8?auto=format&fit=crop&q=80&w=500" },
    { id: "P-104", name: "Sony WH-1000XM5 Headphones", sku: "SNY-XM5-BLK", category: "Audio", price: 380.00, stock: 4, warranty: "1 Year", needsSerial: true, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=500" },
    { id: "P-105", name: "Samsung Odyssey 27\" Monitor", sku: "SAM-G7-27", category: "Monitors", price: 590.00, stock: 3, warranty: "3 Years", needsSerial: true, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500" },
    { id: "P-106", name: "Anker GaNPrime 100W", sku: "ANK-100W-GAN", category: "Accessories", price: 55.00, stock: 22, warranty: "18 Months", needsSerial: false, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500" },
    { id: "P-107", name: "RTX 4070 Ti Super 16GB", sku: "ROG-4070TIS", category: "Components", price: 980.00, stock: 2, warranty: "3 Years", needsSerial: true, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=500" },
    { id: "P-108", name: "WD Black SN850X 2TB SSD", sku: "WD-SN850X-2T", category: "Storage", price: 175.00, stock: 11, warranty: "5 Years", needsSerial: true, image: "https://images.unsplash.com/photo-1597849132103-f938b82e16d4?auto=format&fit=crop&q=80&w=500" },
  ]);

  // ================= CART & HOLD LOGIC =================
  const addToCart = (product) => {
    if (product.stock === 0) return alert("Product is out of stock!");
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        if (existing.qty >= product.stock) return prev;
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1, serialNumber: product.needsSerial ? `SN-${Math.floor(100000 + Math.random() * 900000)}` : "N/A" }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        if (newQty > 0 && newQty <= item.stock) return { ...item, qty: newQty };
        if (newQty <= 0) return null;
      }
      return item;
    }).filter(Boolean));
  };

  const updateSerial = (id, sn) => setCart(prev => prev.map(item => item.id === id ? { ...item, serialNumber: sn } : item));
  const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));
  
  const clearCart = () => { 
    setCart([]); setDiscountAmount(0); setAmountTendered(""); 
    setCustomer({ name: "Walk-in Customer", phone: "+880 1700-000000", email: "", vatBin: "" });
  };

  const holdOrder = () => {
    if (cart.length === 0) return;
    setHeldOrders([...heldOrders, { id: `HLD-${Date.now().toString().slice(-4)}`, cart, customer }]);
    clearCart();
  };

  const resumeOrder = (index) => {
    const order = heldOrders[index];
    setCart(order.cart);
    setCustomer(order.customer);
    setHeldOrders(heldOrders.filter((_, i) => i !== index));
  };

  // ================= CALCULATIONS =================
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const afterDiscount = Math.max(0, subtotal - Number(discountAmount));
  const taxAmount = afterDiscount * taxRate;
  const grandTotal = afterDiscount + taxAmount;
  const changeDue = paymentMethod === "Cash" && amountTendered ? Math.max(0, Number(amountTendered) - grandTotal) : 0;

  // ================= CHECKOUT =================
  const handleProcessCheckout = () => {
    if (cart.length === 0) return alert("Cart is empty!");
    if (paymentMethod === "Cash" && Number(amountTendered) < grandTotal) return alert("Tendered amount is less than total!");

    const invoiceData = {
      invoiceNo: `INV-C404-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      branch: "Sylhet Flagship (Branch #01)",
      cashier: "Tahmid (Sales Exec)",
      mode: posMode,
      customer: { ...customer },
      items: [...cart],
      subtotal,
      discountAmount: Number(discountAmount),
      taxAmount,
      grandTotal,
      paymentMethod,
      amountTendered: Number(amountTendered),
      changeDue
    };

    setCompletedInvoice(invoiceData);
    setShowInvoiceModal(true);
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fmt = (n) => `$${Number(n || 0).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-3 sm:p-6 text-slate-900 overflow-x-hidden">
      
      {/* ================= HEADER ================= */}
      <header className="bg-white border border-slate-200 rounded-2xl p-4 mb-4 sm:mb-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black shadow-md shadow-orange-600/20">
            C4
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Crack404 Tech POS</h1>
            <p className="text-xs font-medium text-slate-500">Terminal #01 • Cashier: Tahmid</p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {heldOrders.length > 0 && (
            <div className="flex gap-2 mr-2 overflow-x-auto hide-scrollbar">
              {heldOrders.map((order, i) => (
                <button key={i} onClick={() => resumeOrder(i)} className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition-colors whitespace-nowrap">
                  <PlayCircle className="w-3.5 h-3.5" /> Resume {order.id}
                </button>
              ))}
            </div>
          )}
          <div className="bg-slate-100 p-1 rounded-xl flex border border-slate-200 w-full sm:w-auto shrink-0">
            <button onClick={() => setPosMode("Sale")} className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${posMode === "Sale" ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>Tax Sale</button>
            <button onClick={() => setPosMode("Quotation")} className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${posMode === "Quotation" ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>Quotation</button>
          </div>
        </div>
      </header>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT 7 COLS: PRODUCT CATALOG */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="relative flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search name, SKU, or scan barcode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
              </div>
              <button className="bg-slate-100 border border-slate-200 text-slate-600 px-4 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
                <SearchCode className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {["All", "Peripherals", "Monitors", "Components", "Storage", "Audio", "Accessories"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat ? 'bg-orange-100 text-orange-700 border border-orange-200 shadow-sm' : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Image-Based Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 pb-12">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => product.stock > 0 && addToCart(product)}
                className={`bg-white border rounded-2xl flex flex-col justify-between transition-all cursor-pointer group shadow-sm hover:shadow-md hover:border-orange-400 overflow-hidden ${
                  product.stock === 0 ? 'opacity-50 border-slate-200 cursor-not-allowed' : 'border-slate-200'
                }`}
              >
                <div className="relative h-32 sm:h-36 bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="p-3">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{product.sku}</p>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-2 mt-0.5 leading-snug">{product.name}</h3>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-end justify-between">
                    <div>
                      <span className="text-sm font-black text-orange-600 block">{fmt(product.price)}</span>
                      <span className="text-[9px] font-bold text-slate-400">War: {product.warranty}</span>
                    </div>
                    {product.stock > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Qty: {product.stock}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT 5 COLS: CART & TERMINAL */}
        <div className="lg:col-span-5 flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm h-[calc(100vh-120px)] lg:sticky top-6">
          
          {/* Customer Search & Form */}
          <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-500" /> Customer Data
              </span>
              <button className="text-[10px] font-bold text-orange-600 hover:text-orange-700">Find Member</button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Customer Name" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-orange-500" />
              <input type="text" placeholder="Mobile / Phone" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-orange-500" />
            </div>
          </div>

          {/* Cart List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-slate-100 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                <ShoppingBag className="w-12 h-12 opacity-30" />
                <p className="text-sm font-bold">Cart is empty</p>
                <p className="text-[10px] text-center max-w-[200px]">Scan a barcode or click a product to start building the order.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-2">
                      <p className="text-xs font-bold text-slate-900 leading-tight">{item.name}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Unit: {fmt(item.price)} • War: {item.warranty}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-xl border border-slate-100 text-xs">
                    {item.needsSerial ? (
                      <div className="flex items-center gap-1 text-[10px]">
                        <span className="font-bold text-slate-400">S/N:</span>
                        <input type="text" value={item.serialNumber} onChange={(e) => updateSerial(item.id, e.target.value)} className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-mono text-slate-800 w-28 focus:outline-none focus:border-orange-500" />
                      </div>
                    ) : <span className="text-[10px] text-slate-400 font-bold">No S/N</span>}

                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center bg-white border border-slate-200 rounded-lg">
                        <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:bg-slate-100 text-slate-600"><Minus className="w-3 h-3" /></button>
                        <span className="px-2 font-black text-xs">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:bg-slate-100 text-slate-600"><Plus className="w-3 h-3" /></button>
                      </div>
                      <span className="font-black text-slate-900 text-xs w-14 text-right">{fmt(item.price * item.qty)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer */}
          <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 shrink-0 space-y-3">
            
            <div className="grid grid-cols-4 gap-1.5">
              {["Cash", "Card", "bKash", "EMI 0%"].map(method => (
                <button
                  key={method}
                  onClick={() => { setPaymentMethod(method); setAmountTendered(""); }}
                  className={`py-1.5 text-[10px] sm:text-xs font-bold rounded-lg border transition-all ${
                    paymentMethod === method ? 'bg-slate-800 text-white border-slate-800 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            {/* Quick Cash Buttons & Calculator */}
            {paymentMethod === "Cash" && (
              <div className="bg-white border border-slate-200 rounded-xl p-2 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">$</span>
                    <input 
                      type="number" 
                      placeholder="Amount Tendered" 
                      value={amountTendered}
                      onChange={e => setAmountTendered(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-6 pr-2 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="flex gap-1">
                    {[100, 500, 1000].map(amt => (
                      <button key={amt} onClick={() => setAmountTendered(amt)} className="px-2 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-[10px] font-bold hover:bg-emerald-100 transition-colors">
                        +{amt}
                      </button>
                    ))}
                  </div>
                </div>
                {amountTendered && Number(amountTendered) >= grandTotal && (
                  <div className="flex justify-between items-center text-xs px-1">
                    <span className="font-bold text-slate-500">Change Due:</span>
                    <span className="font-black text-emerald-600">{fmt(changeDue)}</span>
                  </div>
                )}
              </div>
            )}

            {/* Financial Details */}
            <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-1.5 text-xs font-medium">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span><span>{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-500 items-center">
                <span>Discount ($)</span>
                <input type="number" value={discountAmount} onChange={e => setDiscountAmount(e.target.value)} className="w-16 bg-slate-50 border border-slate-200 rounded text-right px-1.5 py-0.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500" />
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Govt. VAT (5%)</span><span>{fmt(taxAmount)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-black text-slate-900 pt-2 border-t border-slate-100">
                <span>Grand Total</span><span className="text-orange-600">{fmt(grandTotal)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button onClick={holdOrder} disabled={cart.length === 0} className="px-3 py-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-[10px] sm:text-xs rounded-xl disabled:opacity-50 transition-colors flex flex-col items-center justify-center">
                <PauseCircle className="w-4 h-4 mb-0.5" /> Hold
              </button>
              <button onClick={clearCart} disabled={cart.length === 0} className="px-3 py-3 bg-white border border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 text-slate-600 font-bold text-[10px] sm:text-xs rounded-xl disabled:opacity-50 transition-colors flex flex-col items-center justify-center">
                <Trash2 className="w-4 h-4 mb-0.5" /> Void
              </button>
              <button onClick={handleProcessCheckout} disabled={cart.length === 0} className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[0_4px_14px_rgba(234,88,12,0.3)] disabled:opacity-50 transition-all flex items-center justify-center gap-2">
                <Printer className="w-4 h-4 sm:w-5 sm:h-5" /> {posMode === "Quotation" ? "Generate Quote" : "Checkout"}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ================= PRINTABLE TAX INVOICE MODAL ================= */}
      {showInvoiceModal && completedInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl flex flex-col relative">
            
            <div className="sticky top-0 z-10 p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Invoice Ready
              </span>
              <div className="flex items-center gap-2">
                <button onClick={handlePrint} className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm">
                  <Printer className="w-3.5 h-3.5" /> Print Bill
                </button>
                <button onClick={() => setShowInvoiceModal(false)} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PRINTABLE AREA */}
            <div className="p-5 sm:p-8 space-y-6 font-sans text-slate-900 print-area bg-white">
              
              <div className="flex flex-col sm:flex-row justify-between items-start border-b border-slate-200 pb-4 gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">CRACK404 LTD.</h2>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Sylhet HQ: Zindabazar, Sylhet 3100, Bangladesh</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">VAT BIN: 004918239-0102 • Hotline: +880 1700-000000</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs sm:text-sm font-black text-orange-600 uppercase border border-orange-200 bg-orange-50 px-3 py-1 rounded-md block mb-1">
                    {completedInvoice.mode === "Quotation" ? "PROFORMA QUOTE" : "RETAIL TAX INVOICE"}
                  </span>
                  <p className="text-xs font-bold text-slate-700">{completedInvoice.invoiceNo}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium border-b border-slate-100 pb-4">
                <div>
                  <p className="text-slate-400 uppercase text-[10px] font-bold mb-0.5">Billed To:</p>
                  <p className="font-bold text-slate-900">{completedInvoice.customer.name}</p>
                  <p className="text-slate-600">{completedInvoice.customer.phone}</p>
                  <p className="text-slate-600">{completedInvoice.customer.email}</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-slate-400 uppercase text-[10px] font-bold mb-0.5">Sale Info:</p>
                  <p className="text-slate-700"><span className="font-bold">Date:</span> {completedInvoice.date} {completedInvoice.time}</p>
                  <p className="text-slate-700"><span className="font-bold">Branch:</span> {completedInvoice.branch}</p>
                  <p className="text-slate-700"><span className="font-bold">Cashier:</span> {completedInvoice.cashier}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[10px] sm:text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase bg-slate-50">
                      <th className="py-2 px-2 min-w-[150px]">Description & S/N</th>
                      <th className="py-2 px-2 text-center whitespace-nowrap">Warranty</th>
                      <th className="py-2 px-2 text-center">Qty</th>
                      <th className="py-2 px-2 text-right">Price</th>
                      <th className="py-2 px-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {completedInvoice.items.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2.5 px-2">
                          <p className="font-bold text-slate-900">{item.name}</p>
                          <p className="text-[9px] sm:text-[10px] font-mono text-slate-500 mt-0.5">S/N: {item.serialNumber}</p>
                        </td>
                        <td className="py-2.5 px-2 text-center font-bold text-slate-600 whitespace-nowrap">{item.warranty}</td>
                        <td className="py-2.5 px-2 text-center font-black">{item.qty}</td>
                        <td className="py-2.5 px-2 text-right">{fmt(item.price)}</td>
                        <td className="py-2.5 px-2 text-right font-black text-slate-900">{fmt(item.price * item.qty)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-end sm:items-start border-t border-slate-200 pt-4 gap-6">
                <div className="text-[9px] sm:text-[10px] text-slate-500 space-y-1 w-full sm:w-1/2 order-2 sm:order-1">
                  <p><span className="font-bold text-slate-700">Payment:</span> {completedInvoice.paymentMethod}</p>
                  {completedInvoice.paymentMethod === "Cash" && completedInvoice.amountTendered > 0 && (
                     <p><span className="font-bold text-slate-700">Cash Tendered:</span> {fmt(completedInvoice.amountTendered)} | <span className="font-bold text-slate-700">Change:</span> {fmt(completedInvoice.changeDue)}</p>
                  )}
                  <p className="mt-2"><span className="font-bold text-slate-700">Terms:</span> Hardware replacement within 7 days against manufacturing defects. Warranty void if physically damaged.</p>
                  <p className="font-bold text-slate-700 pt-2">Thank you for shopping with Crack404!</p>
                </div>

                <div className="w-full sm:w-48 text-right space-y-1 text-xs order-1 sm:order-2 ml-auto">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal:</span><span>{fmt(completedInvoice.subtotal)}</span>
                  </div>
                  {completedInvoice.discountAmount > 0 && (
                    <div className="flex justify-between text-red-600 font-medium">
                      <span>Discount:</span><span>-{fmt(completedInvoice.discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-500">
                    <span>VAT (5%):</span><span>{fmt(completedInvoice.taxAmount)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>Grand Total:</span><span className="text-orange-600">{fmt(completedInvoice.grandTotal)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-12 flex justify-between text-[10px] font-bold text-slate-400">
                <div className="border-t border-slate-300 pt-1 w-24 sm:w-32 text-center">Customer Sign</div>
                <div className="border-t border-slate-300 pt-1 w-24 sm:w-32 text-center">Authorized Sign</div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * { visibility: hidden; }
          .print-area, .print-area * { visibility: visible; }
          .print-area { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}} />
    </div>
  );
}