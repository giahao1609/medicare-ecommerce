import React from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileCheck2, 
  Clock,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      {/* Upper features strip */}
      <div className="border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Hàng Chính Hãng 100%</p>
              <p className="text-slate-400 text-[11px]">Đầy đủ giấy phép Bộ Y Tế, CO, CQ</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Hỗ Trợ Kỹ Thuật 24/7</p>
              <p className="text-slate-400 text-[11px]">Kỹ sư y sinh trực tiếp bảo dưỡng</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Hồ Sơ Thầu Trọn Gói</p>
              <p className="text-slate-400 text-[11px]">Đáp ứng tiêu chuẩn mời thầu y tế</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Mạng Lưới 63 Tỉnh Thành</p>
              <p className="text-slate-400 text-[11px]">Giao hàng bảo ôn GSP tận cơ sở</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Company presentation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Medicare <span className="text-sky-400">K&P</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Đơn vị chuyên nhập khẩu và phân phối thiết bị y tế công nghệ cao, máy xét nghiệm tự động, thiết bị phòng mổ và vật tư tiêu hao đạt chuẩn quốc tế cho các bệnh viện, phòng khám đa khoa trên toàn quốc.
            </p>
            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Trụ sở chính: Tòa nhà Y Dược K&P, Quận Cầu Giấy, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hotline: 1900 6868 - 0988.xxx.xxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: contact@medicarekp.vn</span>
              </div>
            </div>
          </div>

          {/* Quick links: Equipment */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Trang Thiết Bị</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Máy Siêu Âm 4D/5D</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hệ Thống Chụp X-Quang</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Máy Xét Nghiệm Tự Động</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thiết Bị Thăm Dò Điện Não</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bàn Mổ &amp; Đèn Mổ Led</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Máy Thở Hồi Sức Cấp Cứu</a></li>
            </ul>
          </div>

          {/* Quick links: Supplies & Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Dịch Vụ &amp; Giải Pháp</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Tư vấn xây dựng phòng khám tư nhân</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dịch vụ sửa chữa &amp; kiểm chuẩn định kỳ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cung ứng hóa chất xét nghiệm trọn gói</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tài liệu Catalogue &amp; User Manual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành &amp; đổi trả</a></li>
            </ul>
          </div>

          {/* Partner & Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Nhận Bản Tin Y Tế</h4>
            <p className="text-slate-400 text-xs">
              Đăng ký để nhận danh mục thiết bị mới và cập nhật văn bản đấu thầu y tế từ Bộ Y Tế.
            </p>
            <div className="flex items-center gap-1">
              <input
                type="email"
                placeholder="Email bệnh viện / phòng khám..."
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
              />
              <button
                className="p-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white shrink-0 transition-colors"
                aria-label="Đăng ký"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              Mã số thuế: 0108xxxxxx do Sở KH&ĐT cấp &bull; Đủ điều kiện mua bán trang thiết bị y tế loại A, B, C, D.
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>&copy; {new Date().getFullYear()} Medicare K&P. Toàn bộ hình ảnh và tài liệu kỹ thuật thuộc quyền bảo hộ.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Quy định bảo mật</a>
            <a href="#" className="hover:text-slate-400">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-slate-400">Hồ sơ năng lực</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
