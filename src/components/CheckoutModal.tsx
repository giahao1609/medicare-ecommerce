import React, { useState } from 'react';
import { CartItem, OrderCustomerInfo } from '../types';
import { formatCurrency } from '../utils/formatters';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  Truck, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck,
  Printer
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState<OrderCustomerInfo>({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    address: '',
    city: 'Hà Nội',
    note: '',
    paymentMethod: 'hospital_invoice',
  });

  const [submittedOrder, setSubmittedOrder] = useState<{
    orderId: string;
    createdAt: string;
    data: OrderCustomerInfo;
    totalAmount: number;
  } | null>(null);

  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const orderId = `MED-KNP-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderRecord = {
        orderId,
        createdAt: new Date().toLocaleString('vi-VN'),
        data: formData,
        totalAmount,
      };

      // Save to localStorage as persistent state
      const prevOrders = JSON.parse(localStorage.getItem('medicare_orders') || '[]');
      localStorage.setItem('medicare_orders', JSON.stringify([orderRecord, ...prevOrders]));

      setSubmittedOrder(orderRecord);
      setSubmitting(false);
      onOrderSuccess();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          if (!submittedOrder) onClose();
        }}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6">
        <div 
          className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden z-50 flex flex-col animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-sky-600" />
              <h2 className="text-base font-bold text-slate-900">
                {submittedOrder ? 'Xác Nhận Đơn Hàng Thành Công' : 'Đơn Đặt Hàng &amp; Yêu Cầu Báo Giá Y Tế'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
            {submittedOrder ? (
              /* Success Screen */
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Đã Gửi Đơn Đặt Hàng Thành Công!
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Mã hồ sơ đặt hàng: <strong className="text-sky-600 font-mono text-sm">{submittedOrder.orderId}</strong>
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-left space-y-2">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Đơn vị nhận hàng:</span>
                    <strong className="text-slate-900">{submittedOrder.data.organization || submittedOrder.data.fullName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Người liên hệ:</span>
                    <span className="text-slate-800">{submittedOrder.data.fullName} ({submittedOrder.data.phone})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Địa chỉ bàn giao:</span>
                    <span className="text-slate-800">{submittedOrder.data.address}, {submittedOrder.data.city}</span>
                  </div>
                  <div className="flex justify-between pt-1 font-bold">
                    <span className="text-slate-700">Giá trị tạm tính:</span>
                    <span className="text-sky-700 text-sm">{formatCurrency(submittedOrder.totalAmount)}</span>
                  </div>
                </div>

                <div className="p-3 bg-sky-50 border border-sky-100 rounded-xl text-xs text-slate-600 flex items-center gap-2 text-left">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Kỹ sư trưởng phụ trách địa bàn sẽ liên hệ với anh trong vòng 15 phút để hoàn tất thủ tục bàn giao và văn bản báo giá chính thức.</span>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" /> In Phiếu Yêu Cầu
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-700 transition-colors"
                  >
                    Hoàn Tất &amp; Về Trang Chủ
                  </button>
                </div>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Cart mini overview */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-slate-500">Thiết bị yêu cầu:</span>
                    <strong className="text-slate-900 ml-1">
                      {cartItems.length} danh mục ({cartItems.reduce((a, b) => a + b.quantity, 0)} sản phẩm)
                    </strong>
                  </div>
                  <div className="text-sm font-extrabold text-sky-700">
                    {formatCurrency(totalAmount)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Họ tên người liên hệ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Bác sĩ / Kỹ sư phụ trách..."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Số điện thoại <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                      />
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Tên Bệnh viện / Phòng khám / Doanh nghiệp
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="VD: BV Đa Khoa Tỉnh..."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                      />
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email nhận báo giá <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="khoavattu@benhvien.vn"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                      />
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1">
                      Địa chỉ nhận hàng &amp; lắp đặt <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Số nhà, đường, khoa phòng tiếp nhận..."
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                      />
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Tỉnh / Thành phố
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 outline-none text-xs bg-white"
                    >
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Thanh Hóa">Thanh Hóa</option>
                      <option value="Nghệ An">Nghệ An</option>
                      <option value="Khác">Tỉnh thành khác</option>
                    </select>
                  </div>
                </div>

                {/* Payment Option */}
                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Hình thức thanh toán &amp; Hợp đồng
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className={`p-2.5 rounded-xl border cursor-pointer flex flex-col justify-between ${
                      formData.paymentMethod === 'hospital_invoice'
                        ? 'border-sky-500 bg-sky-50/50'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'hospital_invoice'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'hospital_invoice' })}
                          className="text-sky-600"
                        />
                        <span className="font-bold text-slate-900">Hợp Đồng Viện</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">Xuất hóa đơn VAT &amp; thanh toán theo tiến độ</span>
                    </label>

                    <label className={`p-2.5 rounded-xl border cursor-pointer flex flex-col justify-between ${
                      formData.paymentMethod === 'bank_transfer'
                        ? 'border-sky-500 bg-sky-50/50'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'bank_transfer'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'bank_transfer' })}
                          className="text-sky-600"
                        />
                        <span className="font-bold text-slate-900">Chuyển Khoản</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">Qua tài khoản công ty K&P chính thức</span>
                    </label>

                    <label className={`p-2.5 rounded-xl border cursor-pointer flex flex-col justify-between ${
                      formData.paymentMethod === 'cod'
                        ? 'border-sky-500 bg-sky-50/50'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                          className="text-sky-600"
                        />
                        <span className="font-bold text-slate-900">COD / Nghiệm Thu</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">Nghiệm thu chạy thử đạt chuẩn mới thanh toán</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Ghi chú cấu hình / Thời gian mong muốn nhận hàng
                  </label>
                  <textarea
                    rows={2}
                    placeholder="VD: Yêu cầu kỹ sư chuyển giao kỹ thuật đào tạo 3 buổi, kèm CO/CQ bản gốc..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold hover:bg-slate-50"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold shadow-md shadow-sky-600/20 transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Đang tạo hồ sơ...</span>
                    ) : (
                      <>
                        <Truck className="w-4 h-4" />
                        <span>Gửi Hồ Sơ Đặt Hàng Ngay</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
