import React from 'react';
import { ShieldCheck, Award, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TRUST_METRICS } from '../data/medicalData';
import { getAssetUrl } from '../utils/formatters';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200">
      {/* Background soft glow decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Hệ Thống Phân Phối Thiết Bị Y Tế Cấp 1</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Giải Pháp Thiết Bị &amp; Vật Tư Y Tế <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">Tiêu Chuẩn Bệnh Viện</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cung cấp trang thiết bị chẩn đoán hình ảnh, máy xét nghiệm tự động, thiết bị phòng mổ và vật tư tiêu hao chất lượng cao. Đầy đủ giấy phép Bộ Y Tế, bảo hành chính hãng và hỗ trợ chuyển giao kỹ thuật tận nơi.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>CO/CQ chính ngạch 100%</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bảo trì định kỳ 6 tháng/lần</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hỗ trợ hồ sơ thầu trọn gói</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Xem Danh Mục Thiết Bị</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:19006868"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-sky-600" />
                <span>Tư Vấn Đầu Tư Dự Án</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-white p-4 sm:p-5 shadow-xl border border-slate-200/80">
                <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] flex items-center justify-center border border-slate-100">
                  <img
                    src={getAssetUrl('img/Chemray-420-500x500.jpg')}
                    alt="Chemray 420 Automatic Biochemistry Analyzer"
                    className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-sky-700 border border-sky-200/50 flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Thiết Bị Nổi Bật 2026
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">Rayto Life Sciences</span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
                      Sẵn hàng tại kho
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Máy Xét Nghiệm Sinh Hóa Tự Động Chemray 420
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Công suất 400 test/giờ, làm lạnh thuốc thử 24/7, tự động rửa cuvette 8 bước.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-bold text-sky-700 mt-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

