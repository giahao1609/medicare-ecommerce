import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS, PARTNERS } from './data/medicalData';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { 
  Building, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  SearchX,
  Stethoscope
} from 'lucide-react';

export const App: React.FC = () => {
  // Cart state persisted in LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('medicare_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('medicare_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add to Cart
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Đã thêm ${quantity} x ${product.name} vào danh sách đặt hàng`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Đã xóa sản phẩm khỏi giỏ');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Đã làm trống giỏ hàng');
  };

  const totalCartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-sky-500 selection:text-white">
      {/* Toast Notification Container (z-60 for zero collision) */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-60 animate-in slide-in-from-bottom-5 duration-200">
          <div className="bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        totalCartItems={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        allProducts={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          handleScrollToCatalog();
        }}
      />

      {/* Hero Section */}
      <Hero onExploreClick={handleScrollToCatalog} />

      {/* Main Catalog Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Danh mục vật tư chính ngạch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Hệ Thống Thiết Bị Y Tế &amp; Tiêu Hao
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Toàn bộ sản phẩm được phân phối trực tiếp từ các hãng sản xuất đạt chuẩn ISO 13485 và FDA.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
            Hiển thị <strong className="text-slate-900">{filteredProducts.length}</strong> thiết bị
          </div>
        </div>

        {/* Category Filters */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
          totalProductsCount={filteredProducts.length}
        />

        {/* Product Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on laptop, 4 on desktop) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => {
              const inCart = cart.some((c) => c.product.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => setSelectedProduct(p)}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                  isInCart={inCart}
                />
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-md mx-auto my-12">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <SearchX className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Không tìm thấy thiết bị phù hợp
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Không có sản phẩm nào khớp với từ khóa &quot;{searchQuery}&quot; trong danh mục hiện tại.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold text-xs hover:bg-sky-700 transition-colors"
            >
              Xem Tất Cả Sản Phẩm
            </button>
          </div>
        )}

        {/* Hospital & Distribution Network Section (Modern Responsive Replacement for old broken map table) */}
        <section className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">
                  <MapPin className="w-3.5 h-3.5" /> Mạng Lưới Phân Phối Toàn Quốc
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Tổng Kho Thiết Bị Y Tế &amp; 46 Trung Tâm Dịch Vụ
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Với 2 tổng kho trung tâm tại Hà Nội và Thanh Hóa cùng mạng lưới trạm kỹ thuật tại TP. Hồ Chí Minh và Đà Nẵng, Medicare K&P cam kết cung cấp phụ tùng thay thế và vật tư xét nghiệm trong vòng 24 giờ.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                      <Building className="w-4 h-4" /> Tổng Kho Miền Bắc (Hà Nội)
                    </div>
                    <p className="text-xs text-slate-300 mt-1">Khu Công Nghệ Cao Cầu Giấy, Hà Nội</p>
                    <p className="text-[11px] text-slate-400 mt-1">Diện tích 2.500m² đạt chuẩn kho bảo quản GSP</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                      <Building className="w-4 h-4" /> Chi Nhánh &amp; Kho Miền Trung
                    </div>
                    <p className="text-xs text-slate-300 mt-1">Đại lộ Lê Lợi, TP. Thanh Hóa</p>
                    <p className="text-[11px] text-slate-400 mt-1">Hỗ trợ khẩn cấp bệnh viện khu vực Bắc Trung Bộ</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
                  <a
                    href="tel:19006868"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Liên Hệ Kỹ Sư Địa Bàn</span>
                  </a>
                </div>
              </div>

              {/* Map & Visual Infographic Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm max-w-sm w-full text-center">
                  <div className="aspect-[3/4] max-h-72 mx-auto flex items-center justify-center overflow-hidden rounded-xl bg-slate-950/40 p-2 border border-white/5">
                    <img
                      src="/img/bando.png"
                      alt="Bản đồ mạng lưới phân phối y tế 63 tỉnh thành"
                      className="w-full h-full object-contain filter brightness-110 drop-shadow-md"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs px-2">
                    <div className="text-left">
                      <p className="text-[11px] text-slate-400">Đại lý &amp; Đối tác</p>
                      <p className="text-sm font-black text-white">46 Đơn vị</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-slate-400">Phủ sóng</p>
                      <p className="text-sm font-black text-emerald-400">63 Tỉnh Thành</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Medical Brands & Partners */}
        <section className="mt-14 pb-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Thương Hiệu Hợp Tác</span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Đối Tác Thiết Bị Y Tế Hàng Đầu Thế Giới
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                  />
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-sky-600 transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, qty) => handleAddToCart(p, qty)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onOrderSuccess={() => {
          setCart([]);
        }}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(email) => {
          showToast(`Xin chào đối tác ${email}`);
        }}
      />
    </div>
  );
};
export default App;
