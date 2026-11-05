import React from 'react';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatters';
import { ShoppingCart, Eye, Star, ShieldCheck, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  isInCart = false,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Media & Badges Container */}
      <div className="relative p-4 pb-0">
        {/* Badges Container */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
          {product.isBestSeller && (
            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500 text-white shadow-sm">
              Bán Chạy
            </span>
          )}
          {product.isFeatured && !product.isBestSeller && (
            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-600 text-white shadow-sm">
              Nổi Bật
            </span>
          )}
        </div>

        {/* Brand tag top-right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
            {product.origin}
          </span>
        </div>

        {/* Product Image Canvas */}
        <div 
          onClick={() => onSelect(product)}
          className="cursor-pointer relative overflow-hidden rounded-xl bg-slate-50 aspect-square flex items-center justify-center p-4 border border-slate-100 group-hover:bg-sky-50/30 transition-colors"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Quick View Hover Button */}
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-sky-600" />
              Xem Thông Số
            </span>
          </div>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category & Brand info */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold text-sky-600 truncate">{product.categoryName}</span>
            <span className="font-medium">{product.brand}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(product)}
            className="cursor-pointer text-sm font-bold text-slate-900 line-clamp-2 hover:text-sky-600 transition-colors title-clamp leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Standards Tags */}
          <div className="flex items-center gap-1.5 flex-wrap mt-2">
            {product.standards.slice(0, 2).map((std, i) => (
              <span key={i} className="inline-flex items-center gap-0.5 text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                <ShieldCheck className="w-2.5 h-2.5 text-teal-600" />
                {std}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 text-xs">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-bold text-slate-700">{product.rating}</span>
            <span className="text-slate-400 text-[11px]">({product.reviewsCount} đánh giá viện)</span>
          </div>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="block text-xs text-slate-400">Giá niêm yết:</span>
            <div className="text-sm sm:text-base font-extrabold text-slate-900">
              {formatCurrency(product.price)}
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[11px] text-slate-400 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={`p-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm ${
              isInCart
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-slate-900 text-white hover:bg-sky-600'
            }`}
            title="Thêm vào danh sách đặt hàng"
            aria-label="Thêm vào giỏ"
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Đã thêm</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Đặt Hàng</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
