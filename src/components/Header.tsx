import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  PhoneCall, 
  Menu, 
  X, 
  User, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { Product } from '../types';

interface HeaderProps {
  totalCartItems: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalCartItems,
  onOpenCart,
  onOpenAuth,
  searchQuery,
  onSearchChange,
  allProducts,
  onSelectProduct,
  selectedCategory,
  onSelectCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : allProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top utility bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 text-sky-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Chuẩn Bộ Y Tế & ISO 13485
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-emerald-400" /> Giao hàng chuyên dụng toàn quốc
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:19006868" className="flex items-center gap-1 hover:text-white transition-colors">
              <PhoneCall className="w-3 h-3 text-sky-400" />
              <span>Hotline Bệnh Viện: <strong className="text-white">1900 6868</strong></span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenAuth}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <User className="w-3 h-3" />
              <span>Đăng nhập / Báo giá đối tác</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-8">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onSelectCategory('all')} 
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  Medicare <span className="text-sky-600">K&P</span>
                </span>
                <span className="block text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                  Vật Tư & Thiết Bị Y Tế
                </span>
              </div>
            </button>
          </div>

          {/* Search Bar with Autocomplete Dropdown */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm máy xét nghiệm, máy siêu âm, dao mổ, vật tư..."
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Suggestions Dropdown */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-20 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="p-2 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
                  Gợi ý sản phẩm y tế ({searchResults.length})
                </div>
                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        setShowSearchDropdown(false);
                      }}
                      className="w-full p-3 flex items-center gap-3 text-left hover:bg-sky-50 transition-colors"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-11 h-11 object-cover rounded-lg border border-slate-200 bg-white p-0.5 shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.brand} &bull; {item.origin}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Consultation Badge */}
            <a
              href="tel:19006868"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Yêu Cầu Báo Giá</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900 text-white hover:bg-sky-700 transition-all flex items-center gap-2 shadow-sm"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingCart className="w-5 h-5 text-sky-400" />
              <span className="hidden sm:inline text-xs font-semibold">Giỏ Hàng</span>
              {totalCartItems > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-rose-500 rounded-full animate-pulse">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl md:hidden text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input (Visible on small screens) */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm thiết bị y tế..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean overlay with proper z-40 and z-50 scale) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative bg-white w-full max-w-sm ml-auto h-full p-5 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="font-bold text-slate-900">Danh Mục Thiết Bị</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {[
                  { id: 'all', name: 'Tất Cả Sản Phẩm' },
                  { id: 'chan-doan-hinh-anh', name: 'Chẩn Đoán Hình Ảnh' },
                  { id: 'xet-nghiem', name: 'Thiết Bị Xét Nghiệm' },
                  { id: 'hoi-suc-phong-mo', name: 'Hồi Sức Cấp Cứu - P.Mổ' },
                  { id: 'tham-do-chuc-nang', name: 'Thăm Dò Chức Năng' },
                  { id: 'vat-tu-tieu-hao', name: 'Vật Tư Tiêu Hao & Hóa Chất' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-sky-50 text-sky-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" /> Đăng nhập / Đăng ký
              </button>
              <a
                href="tel:19006868"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Gọi 1900 6868
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
