import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatters';
import { 
  X, 
  ShoppingCart, 
  ShieldCheck, 
  Star, 
  Truck, 
  CheckCircle, 
  PhoneCall, 
  Plus, 
  Minus,
  FileCheck
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  useEffect(() => {
    // Reset quantity on product change
    setQuantity(1);
    setAddedSuccess(false);

    // Prevent body scroll when modal is open
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6">
        <div 
          className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden z-50 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                {product.categoryName}
              </span>
              <span className="text-xs text-slate-500 font-medium">Mã SP: {product.id.toUpperCase()}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: Image Canvas */}
              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="aspect-square rounded-xl bg-slate-50 border border-slate-200 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Quick Trust Checklist */}
                <div className="rounded-xl bg-sky-50/60 border border-sky-100 p-3 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Bảo hành chính hãng 12-24 tháng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Miễn phí vận chuyển &amp; lắp đặt viện</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Đầy đủ hóa đơn VAT, CO, CQ</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Specs */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">{product.brand}</span>
                    <span>&bull;</span>
                    <span>Xuất xứ: <strong>{product.origin}</strong></span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 leading-snug">
                    {product.name}
                  </h2>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviewsCount} cơ sở y tế đã nghiệm thu)</span>
                  </div>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Standard Certification Pills */}
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium text-slate-500">Tiêu chuẩn:</span>
                    {product.standards.map((std, i) => (
                      <span key={i} className="text-xs bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded-md">
                        {std}
                      </span>
                    ))}
                  </div>

                  {/* Price Box */}
                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500">Đơn giá dự án / bán buôn:</span>
                    <div className="flex items-baseline gap-3 mt-0.5">
                      <span className="text-2xl font-black text-slate-900">
                        {formatCurrency(product.price)}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-slate-400 line-through">
                          {formatCurrency(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quantity & CTA */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-700">Số lượng:</span>
                    <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-slate-600 hover:bg-slate-100 transition-colors"
                        aria-label="Giảm"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 py-2 text-xs font-bold text-slate-900 min-w-[2.5rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-slate-600 hover:bg-slate-100 transition-colors"
                        aria-label="Tăng"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-col sm:flex-row">
                    <button
                      onClick={handleAddToCart}
                      className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                        addedSuccess
                          ? 'bg-emerald-600 text-white'
                          : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20'
                      }`}
                    >
                      {addedSuccess ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Đã Thêm Vào Giỏ Hàng</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Thêm Vào Giỏ Hàng</span>
                        </>
                      )}
                    </button>

                    <a
                      href="tel:19006868"
                      className="w-full sm:w-auto py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4 text-sky-600" />
                      <span>Hỗ Trợ Kỹ Thuật</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Specifications Table */}
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-600" />
                Thông Số Kỹ Thuật Chi Tiết
              </h4>
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                        <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-100">
                          {key}
                        </td>
                        <td className="py-2.5 px-4 text-slate-600 border-b border-slate-100">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
