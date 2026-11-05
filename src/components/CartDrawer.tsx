import React from 'react';
import { CartItem } from '../types';
import { formatCurrency } from '../utils/formatters';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  ArrowRight,
  ShieldAlert,
  FileSpreadsheet
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-sky-600" />
              <h2 className="text-base font-bold text-slate-900">
                Danh Sách Đặt Hàng ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Đóng giỏ hàng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-400 border border-sky-100">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Chưa có thiết bị nào trong giỏ</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Vui lòng chọn thiết bị hoặc vật tư y tế trong danh mục để thêm vào danh sách yêu cầu báo giá.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold text-xs hover:bg-sky-700 transition-colors"
                >
                  Khám Phá Sản Phẩm
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="p-3 rounded-xl border border-slate-200 bg-white hover:border-sky-200 transition-all flex gap-3 items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded-lg bg-slate-50 border border-slate-100 p-1 shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-sky-600 truncate">
                        {product.brand} &bull; {product.origin}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 truncate" title={product.name}>
                        {product.name}
                      </h4>
                      <div className="text-xs font-extrabold text-slate-900 mt-0.5">
                        {formatCurrency(product.price)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                            className="p-1 text-slate-600 hover:text-slate-900 transition-colors"
                            aria-label="Giảm"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-800">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            className="p-1 text-slate-600 hover:text-slate-900 transition-colors"
                            aria-label="Tăng"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                          title="Xóa mục này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    Xóa tất cả sản phẩm
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Tổng tiền hàng ước tính:</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Chiết khấu dự án / bệnh viện:</span>
                  <span className="text-emerald-600 font-semibold">Áp dụng theo hợp đồng</span>
                </div>
                <div className="flex justify-between text-slate-900 text-sm font-black pt-2 border-t border-slate-200">
                  <span>Tạm tính (chưa gồm VAT):</span>
                  <span className="text-sky-700">{formatCurrency(totalAmount)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-sky-50 p-2.5 rounded-lg border border-sky-100">
                <ShieldAlert className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Giá trị chính thức sẽ được kỹ sư gửi qua văn bản báo giá và hợp đồng nguyên tắc.</span>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 group"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Tiến Hành Đặt Hàng &amp; Nhận Báo Giá</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
